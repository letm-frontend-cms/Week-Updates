export async function GET() {
  const notes = [
    { id: 1, title: "Meeting Notes", content: "Discuss project timeline" },
    { id: 2, title: "Shopping List", content: "Buy groceries for the week" },
    { id: 3, title: "Ideas", content: "New feature suggestions" },
    { id: 4, title: "Reminders", content: "Call dentist for appointment" },
    { id: 5, title: "Goals", content: "Complete project by Friday" }
  ];
  
  return Response.json(notes);
}
