import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from "./TextField";

const meta = {
    title: "Components/TextField",
    component: TextField,
    tags: ["forms", "input"],
    argTypes: {
        placeHolder: { control: "text" }
    },
    parameters: {
        docs: {
          description: {
            component: 'A reusable text field component.',
          },
        },
        controls: { hideNoControlsWarning: true },
        // design: {
        //   type: 'figma',
        //   url: 'https://www.figma.com/example',
        // },
    },
} satisfies Meta<typeof TextField>

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        value: 'Hello',
        placeHolder: 'please enter',
    },
  };