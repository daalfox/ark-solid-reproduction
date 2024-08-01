import { Combobox, Field, NumberInput } from "@ark-ui/solid";
import { Component, For } from "solid-js";
import { Portal } from "solid-js/web";

const App: Component = () => {
  const items = ["apple", "banana", "lemon"];
  return (
    <Field.Root>
      <Field.Input
        asChild={() => (
          <>
            <Combobox.Root items={items}>
              <Combobox.Label>Fruit</Combobox.Label>
              <Combobox.Control>
                <Combobox.Input />
                <Combobox.Trigger>Open</Combobox.Trigger>
                <Combobox.ClearTrigger>Clear</Combobox.ClearTrigger>
              </Combobox.Control>
              <Portal>
                <Combobox.Positioner>
                  <Combobox.Content>
                    <For each={items}>
                      {(item) => (
                        <Combobox.Item item={item}>
                          <Combobox.ItemText>{item}</Combobox.ItemText>
                          <Combobox.ItemIndicator>✓</Combobox.ItemIndicator>
                        </Combobox.Item>
                      )}
                    </For>
                  </Combobox.Content>
                </Combobox.Positioner>
              </Portal>
            </Combobox.Root>
            <NumberInput.Root>
              <NumberInput.Label>Label</NumberInput.Label>
              <NumberInput.Input />
              <NumberInput.Control>
                <NumberInput.DecrementTrigger>-1</NumberInput.DecrementTrigger>
                <NumberInput.IncrementTrigger>+1</NumberInput.IncrementTrigger>
              </NumberInput.Control>
            </NumberInput.Root>
          </>
        )}
      />
    </Field.Root>
  );
};

export default App;
