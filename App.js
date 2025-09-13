import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.length === 0) {
      return;
    }
    setTasks([...tasks, task]);
    setTask("");
  }

  function deleteTask(index) {
    const copy = [...tasks];
    copy.splice(index, 1);
    setTasks(copy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.heading}>To Do List</Text>
      </View>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter task"
          value={task}
          onChangeText={setTask}
        />
        <Button title="Add" onPress={addTask} />
      </View>

      {tasks.map((t, i) => (
        <View key={i} style={styles.taskRow}>
          <Text style={styles.taskText}>{t}</Text>
          <Button title="✓" onPress={() => deleteTask(i)} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#d4e8f3" },
  navbar: { backgroundColor: "#072434", padding: 10 },
  heading: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "900",
    fontFamily: "monospace",
    color: "#e3eef4",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 8,
    height: 40,
    marginRight: 10,
    borderRadius: 5,
    fontSize: 22,
  },
  taskRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginVertical: 4,
    marginHorizontal: 15,
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
  },
  taskText: { fontSize: 16 },
});
