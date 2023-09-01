type SupaBasePlaygroundProps = {
  supabase: any;
};

const SupaBasePlayground: React.FC<SupaBasePlaygroundProps> = ({ supabase }) => {

  const printRows = async () => {

    let { data: my_table, error } = await supabase
      .from('my_table')
      .select('*')

    if (error) {
      console.error("Can't print rows. Error fetching data", error);
      return;
    }

    console.log("Rows:", my_table);

  }

  const addRow = async () => {

    const randomString = Math.random().toString(36).substring(2, 15); //random name

    const { data, error } = await supabase
      .from('my_table')
      .insert([
        { name: randomString },
      ])
      .select()

    if (error) {
      console.error("Can't add row. Error fetching data", error);
      return;
    }

    console.log("Inserted row:", data);

  }

  return (
    <div>
      <p>Connected to supabase!</p>
      <button onClick={printRows}>
        Print Rows to Console
      </button>
      <button onClick={addRow}>
        Add row with a random name
      </button>
    </div>
  );

};


export default SupaBasePlayground;