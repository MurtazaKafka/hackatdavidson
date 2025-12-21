-- Create registrations table
CREATE TABLE public.registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  age INTEGER NOT NULL,
  tshirt_size TEXT NOT NULL,
  school TEXT NOT NULL,
  school_other TEXT,
  level_of_study TEXT NOT NULL,
  country_of_residence TEXT NOT NULL,
  country_other TEXT,
  dietary_restrictions TEXT[] DEFAULT '{}',
  allergies_detail TEXT,
  other_accommodations TEXT,
  airport_transportation TEXT NOT NULL,
  resume_url TEXT,
  mlh_code_of_conduct BOOLEAN NOT NULL DEFAULT false,
  mlh_event_logistics BOOLEAN NOT NULL DEFAULT false,
  mlh_marketing BOOLEAN NOT NULL DEFAULT false,
  discord_joined BOOLEAN NOT NULL DEFAULT false,
  additional_notes TEXT,
  parental_consent BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert registrations (public form)
CREATE POLICY "Anyone can insert registrations"
ON public.registrations
FOR INSERT
TO anon
WITH CHECK (true);

-- Create policy to allow admins to view all registrations (for future admin dashboard)
CREATE POLICY "Authenticated users can view registrations"
ON public.registrations
FOR SELECT
TO authenticated
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_registrations_updated_at
BEFORE UPDATE ON public.registrations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index on email for faster lookups
CREATE INDEX idx_registrations_email ON public.registrations(email);

-- Create index on created_at for sorting
CREATE INDEX idx_registrations_created_at ON public.registrations(created_at DESC);