import React from "react";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = React.use(params); // unwrap Promise

  return (
    <div className="text-7xl min-h-screen text-white">
      <h1 className="text-5xl text-white">ID: {resolvedParams.id}</h1>
    </div>
  );
};

export default Page;
