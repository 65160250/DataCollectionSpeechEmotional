-- SER recorder schema for Supabase.
-- Run this in Supabase SQL Editor before starting the Next.js backend.

create extension if not exists pgcrypto;

create table if not exists public.speakers (
  participant_id text primary key,
  participant_id_source text not null default 'server_generated',
  alias text,
  gender text not null check (gender in ('female', 'male', 'other', 'prefer_not_to_say')),
  age_range text not null check (age_range in ('under_18', '18-25', '26-35', '36-45', '46+')),
  english_level text not null check (english_level in ('A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'unknown')),
  dataset_role text not null default 'eval_only' check (dataset_role in ('eval_only', 'train_candidate')),
  consent_research boolean not null default false,
  consent_commercial boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.recording_sessions (
  session_id uuid primary key,
  participant_id text not null references public.speakers(participant_id) on delete restrict,
  dataset_role text not null default 'eval_only' check (dataset_role in ('eval_only', 'train_candidate')),
  status text not null default 'started' check (status in ('started', 'completed', 'abandoned')),
  recording_count integer not null default 0,
  client_recording_count integer,
  user_agent text,
  started_at timestamptz not null default now(),
  completed_at timestamptz
);

create table if not exists public.recordings (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.recording_sessions(session_id) on delete restrict,
  participant_id text not null references public.speakers(participant_id) on delete restrict,
  emotion text not null check (emotion in ('angry', 'happy', 'sad', 'neutral')),
  part text not null check (part in ('A', 'B', 'C')),
  sentence_id text not null,
  sentence_text text not null,
  condition text not null default 'quiet' check (condition in ('quiet', 'noisy')),
  take integer not null default 1,
  duration_sec numeric(8, 3) not null,
  retakes integer not null default 0,
  storage_bucket text not null,
  storage_path text not null unique,
  mime_type text not null,
  file_size_bytes integer not null,
  recorded_at_utc timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists recordings_participant_idx on public.recordings(participant_id);
create index if not exists recordings_session_idx on public.recordings(session_id);
create index if not exists recordings_emotion_idx on public.recordings(emotion);

alter table public.speakers enable row level security;
alter table public.recording_sessions enable row level security;
alter table public.recordings enable row level security;

-- The Next.js backend uses SUPABASE_SERVICE_ROLE_KEY, so public anon policies are not required
-- for these tables. Keep RLS enabled and expose reads only through a future admin dashboard/API.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'ser-recordings',
  'ser-recordings',
  false,
  10485760,
  array['audio/webm', 'audio/mp4', 'audio/ogg', 'audio/wav', 'audio/wave', 'audio/x-wav']
)
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;
