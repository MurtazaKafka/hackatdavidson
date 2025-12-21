// Admin Script to View Registrations
// Run with: node view-registrations.js

import { createClient } from '@supabase/supabase-js';

// You'll need to use your SERVICE ROLE KEY (not anon key) for admin access
// Get it from: https://supabase.com/dashboard/project/wkweslciqkszfdsiocfc/settings/api
const SUPABASE_URL = 'https://wkweslciqkszfdsiocfc.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = 'YOUR_SERVICE_ROLE_KEY_HERE'; // ⚠️ KEEP THIS SECRET!

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

async function viewRegistrations() {
  try {
    // Fetch all registrations
    const { data, error } = await supabase
      .from('registrations')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching registrations:', error);
      return;
    }

    console.log(`\n📊 Total Registrations: ${data.length}\n`);
    console.log('='.repeat(80));

    data.forEach((reg, index) => {
      console.log(`\n#${index + 1} - ${reg.first_name} ${reg.last_name}`);
      console.log(`   Email: ${reg.email}`);
      console.log(`   School: ${reg.school}`);
      console.log(`   Level: ${reg.level_of_study}`);
      console.log(`   T-Shirt: ${reg.tshirt_size}`);
      console.log(`   Transportation: ${reg.airport_transportation}`);
      console.log(`   Registered: ${new Date(reg.created_at).toLocaleString()}`);
      
      if (reg.dietary_restrictions && reg.dietary_restrictions.length > 0) {
        console.log(`   Dietary: ${reg.dietary_restrictions.join(', ')}`);
      }
      
      if (reg.resume_url) {
        console.log(`   Resume: ${reg.resume_url}`);
      }
    });

    console.log('\n' + '='.repeat(80));
    console.log(`\n✅ Total: ${data.length} registrations\n`);

    // Summary statistics
    const schools = {};
    const levels = {};
    
    data.forEach(reg => {
      schools[reg.school] = (schools[reg.school] || 0) + 1;
      levels[reg.level_of_study] = (levels[reg.level_of_study] || 0) + 1;
    });

    console.log('\n📚 Schools:');
    Object.entries(schools)
      .sort(([,a], [,b]) => b - a)
      .forEach(([school, count]) => {
        console.log(`   ${school}: ${count}`);
      });

    console.log('\n🎓 Study Levels:');
    Object.entries(levels)
      .sort(([,a], [,b]) => b - a)
      .forEach(([level, count]) => {
        console.log(`   ${level}: ${count}`);
      });

  } catch (err) {
    console.error('Unexpected error:', err);
  }
}

// Export to CSV
async function exportToCSV() {
  try {
    const { data, error } = await supabase
      .from('registrations')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    // Simple CSV generation
    const headers = [
      'First Name', 'Last Name', 'Email', 'Phone', 'Age', 'School',
      'Level of Study', 'T-Shirt Size', 'Country', 'Transportation',
      'Dietary Restrictions', 'Created At'
    ];

    const csv = [
      headers.join(','),
      ...data.map(reg => [
        reg.first_name,
        reg.last_name,
        reg.email,
        reg.phone_number,
        reg.age,
        reg.school,
        reg.level_of_study,
        reg.tshirt_size,
        reg.country_of_residence,
        reg.airport_transportation,
        `"${(reg.dietary_restrictions || []).join('; ')}"`,
        new Date(reg.created_at).toISOString()
      ].join(','))
    ].join('\n');

    console.log('\n📄 CSV Output:\n');
    console.log(csv);

    // You can also save to file with Node.js fs module
    // import { writeFileSync } from 'fs';
    // writeFileSync('registrations.csv', csv);
    // console.log('✅ Saved to registrations.csv');

  } catch (err) {
    console.error('Error exporting:', err);
  }
}

// Run the script
console.log('🔍 Fetching registrations from Supabase...\n');
await viewRegistrations();

// Uncomment to export CSV:
// await exportToCSV();
