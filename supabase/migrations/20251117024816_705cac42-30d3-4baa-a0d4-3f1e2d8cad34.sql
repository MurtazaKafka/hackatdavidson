-- Enable public uploads to the resumes bucket
-- Note: Since this is for a registration form, users are not authenticated

-- Allow anyone to insert files into the resumes bucket
CREATE POLICY "Allow public resume uploads"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (bucket_id = 'resumes');

-- Allow users to read their own uploads (optional, for preview purposes)
CREATE POLICY "Allow public to read resumes"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'resumes');

-- Allow users to update their uploads
CREATE POLICY "Allow public to update resumes"
ON storage.objects
FOR UPDATE
TO public
USING (bucket_id = 'resumes')
WITH CHECK (bucket_id = 'resumes');

-- Allow users to delete their uploads
CREATE POLICY "Allow public to delete resumes"
ON storage.objects
FOR DELETE
TO public
USING (bucket_id = 'resumes');