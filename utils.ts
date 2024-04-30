interface User {
  name: string;
  age: number;
}

export function parseUserCsv(csv) {
  const data = csv.split("\n").map(row => row.split(","))
  const users = data.slice(1).map(row => {
    const user: User = {
      name: row[0],
      age: parseInt(row[1])
    }
    return user
  })

  return users;
}

