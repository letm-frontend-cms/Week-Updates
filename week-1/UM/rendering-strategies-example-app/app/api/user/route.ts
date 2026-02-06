export async function GET() {
  const users = [
    { name: "John Doe", email: "john.doe@example.com", address: "123 Main St, New York, NY 10001" },
    { name: "Jane Smith", email: "jane.smith@example.com", address: "456 Oak Ave, Los Angeles, CA 90001" },
    { name: "Bob Johnson", email: "bob.johnson@example.com", address: "789 Pine Rd, Chicago, IL 60601" }
  ];
  
  const randomUser = users[Math.floor(Math.random() * users.length)];
  return Response.json(randomUser);
}
