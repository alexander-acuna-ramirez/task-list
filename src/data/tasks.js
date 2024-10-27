import { v4 as uuidv4 } from 'uuid';
const today = new Date().toISOString().split("T")[0];


export const tasksData = [
  {
      id: "b1a8e9f5-1a4c-4a2e-8f47-3e1f8d7f9c8a",
      title: "Team Meeting",
      startTime: "09:00",
      endTime: "10:00",
      date: "2024-10-30",
      category: "Work",
      description: "Monthly team meeting to discuss project updates.",
      status: "open"
  },
  {
      id: "c2b9f6d6-2b5d-4b3f-9f58-4f2f9e8f0d9b",
      title: "Grocery Shopping",
      startTime: "11:00",
      endTime: "12:00",
      date: "2024-10-31",
      category: "Shopping",
      description: "Buy ingredients for the week's meal prep.",
      status: "closed"
  },
  {
      id: "d3c0a7e7-3c6e-4c4f-af69-5f3f0e9f1eac",
      title: "Doctor Appointment",
      startTime: "14:00",
      endTime: "15:00",
      date: "2024-10-25",
      category: "Health",
      description: "Routine check-up with Dr. Smith.",
      status: "open"
  },
  {
      id: "e4d1b8f8-4d7f-4d5f-bf7a-6f4f1f0f2fbd",
      title: "Budget Review",
      startTime: "16:00",
      endTime: "17:30",
      date: "2024-10-26",
      category: "Finance",
      description: "Review monthly expenses and adjust budget.",
      status: "archived"
  },
  {
      id: "f5e2c9g9-5e8g-5e6g-cg8b-7g5g2g1g3gce",
      title: "Read New Book",
      startTime: "18:00",
      endTime: "19:30",
      date: "2024-11-01",
      category: "Personal",
      description: "Read 'Atomic Habits' for personal development.",
      status: "open"
  },
  {
      id: "g6f3d0h0-6f9h-6f7h-dh9c-8h6h3h2h4hdf",
      title: "Yoga Session",
      startTime: "07:00",
      endTime: "08:00",
      date: "2024-10-27",
      category: "Health",
      description: "Morning yoga to relax and refresh.",
      status: "closed"
  },
  {
      id: "h7g4e1i1-7g0i-7g8i-eh0d-9i7i4i3i5ieg",
      title: "Family Dinner",
      startTime: "19:00",
      endTime: "21:00",
      date: "2024-11-02",
      category: "Social",
      description: "Dinner with family at the new Italian restaurant.",
      status: "open"
  },
  {
      id: "i8h5f2j2-8h1j-8h9j-fj1e-0j8j5j4j6jfh",
      title: "Final Exam Study",
      startTime: "15:00",
      endTime: "18:00",
      date: "2024-10-29",
      category: "Education",
      description: "Review notes and practice problems for the final exam.",
      status: "open"
  },
  {
      id: "j9i6g3k3-9i2k-9i0k-gk2f-1k9k6k5k7kgj",
      title: "Weekend Getaway",
      startTime: "09:00",
      endTime: "18:00",
      date: "2024-11-03",
      category: "Travel",
      description: "Day trip to the mountains for a short getaway.",
      status: "archived"
  },
  {
      id: "k0j7h4l4-0j3l-0j1l-hl3g-2l0l7l6l8lhk",
      title: "Annual Physical Exam",
      startTime: "10:00",
      endTime: "11:30",
      date: "2024-11-04",
      category: "Health",
      description: "Comprehensive health check-up at the clinic.",
      status: "open"
  },
  /*-------------------------*/
  {
    id: uuidv4(),
    title: "Client Follow-up",
    startTime: "10:00",
    endTime: "11:00",
    date: today,
    category: "Work",
    description: "Call client to discuss ongoing project requirements.",
    status: "open"
  },
  {
    id: uuidv4(),
    title: "Gym Workout",
    startTime: "11:30",
    endTime: "12:30",
    date: today,
    category: "Health",
    description: "Strength training session at the gym.",
    status: "open"
  },
  {
    id: uuidv4(),
    title: "Code Review",
    startTime: "13:00",
    endTime: "14:30",
    date: today,
    category: "Work",
    description: "Review the team's latest code commits.",
    status: "closed"
  },
  {
    id: uuidv4(),
    title: "Lunch with Friend",
    startTime: "12:00",
    endTime: "13:00",
    date: today,
    category: "Social",
    description: "Meet with old friend at the local cafe.",
    status: "open"
  },
  {
    id: uuidv4(),
    title: "Weekly Planning",
    startTime: "15:00",
    endTime: "16:00",
    date: today,
    category: "Work",
    description: "Plan tasks and set priorities for the upcoming week.",
    status: "open"
  },
  {
    id: uuidv4(),
    title: "Grocery Shopping",
    startTime: "16:30",
    endTime: "17:00",
    date: today,
    category: "Shopping",
    description: "Pick up essential groceries for the week.",
    status: "closed"
  },
  {
    id: uuidv4(),
    title: "Read Research Articles",
    startTime: "17:30",
    endTime: "18:30",
    date: today,
    category: "Education",
    description: "Read up on recent articles in your field.",
    status: "open"
  },
  {
    id: uuidv4(),
    title: "Dinner with Family",
    startTime: "19:00",
    endTime: "20:30",
    date: today,
    category: "Social",
    description: "Dinner at home with the family.",
    status: "open"
  },
  {
    id: uuidv4(),
    title: "Evening Run",
    startTime: "20:45",
    endTime: "21:30",
    date: today,
    category: "Health",
    description: "Evening run around the neighborhood.",
    status: "closed"
  }
];
