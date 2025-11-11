import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import ModuleView from "../entity/modules/ModuleView";

const ModuleViewScreen = ({ navigate, route }) => {
  // Initialisations ---------------------
  const { module, onDelete } = route.params;
  const { module } = route.params;

  // State -------------------------------
  // Handlers ----------------------------
  // View --------------------------------
  return (
    <Screen>
      <ModuleView module={module} onDelete={onDelete} />
      <ModuleView module={module} />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleViewScreen;
