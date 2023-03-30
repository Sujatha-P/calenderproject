import Calendar from "./Calendar";

 export function Calenderform() {
  const today = new Date();
  return (
    <div className="App">
      <Calendar date={today} />

    </div>
  );
}
