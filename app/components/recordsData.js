export const records = [
    {
      title: "Groceries",
      amount: -50.25,
      category: "Food",
      description: "Bought fruits and vegetables",
    },
    {
      title: "Salary",
      amount: 1500.0,
      category: "Income",
      description: "Monthly paycheck",
    },
    {
      title: "Gym Membership",
      amount: -45.0,
      category: "Health",
      description: "Monthly gym subscription",
    },
    {
      title: "Coffee",
      amount: -4.5,
      category: "Food",
      description: "Morning coffee",
    },
    {
      title: "Freelance Work",
      amount: 300.0,
      category: "Income",
      description: "Payment for freelance project",
    },
  ];

  export const calculateTotalAmount = () => {
    return records.reduce((total, record) => total + record.amount, 0);
  };

  export const totalAmount = calculateTotalAmount();