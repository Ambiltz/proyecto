interface TaskCardProps {
    title: string;
    description: string;
}


export function TaskCard(props: TaskCardProps){
  const tasks = [
    {
      title: "Hola",
      description: "mundo",
    },
    {
      title: "Adios",
      description: "mundo",
    },
    {
      title: "Jejeje",
      description: "jijijij",
    },
    {
      title: "Hola",
      description: "mundo",
    },
  ];

  const taskElements = tasks.map((task, index) => (
    <TaskCard key={index} title={task.title} description={task.description} />
  ));

return(<div className="bg-white h-screen w-screen rounded-lg flex flex-col items-center justify-center text-black">
        <div className="mt-2">Descripción larga </div>
       {taskElements}
      
    </div>
)
}