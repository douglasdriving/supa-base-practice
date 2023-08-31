

function SupaBasePlayground(supabase: any, connected: boolean) {

  const printRows = async () => {

    console.log(supabase);

    console.log("Printing rows...");

    if (!connected) {
      console.error("Can't print rows. SupaBase is not connected");
      return;
    }

    let { data: my_table, error } = await supabase
      .from('my_table')
      .select('*')


    if (error) {
      console.error("Can't print rows. Error fetching data", error);
      return;
    }
    else {
      console.log("Rows:", my_table);
    }

  }

  const addRow = async () => {
    //generate a random string of 10 characters
    const randomString = Math.random().toString(36).substring(2, 15);


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
    else {
      console.log("Inserted row:", data);
    }

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
}

export default SupaBasePlayground;