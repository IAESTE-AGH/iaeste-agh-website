![image](https://i.etsystatic.com/42415510/r/il/f4a769/5422445392/il_570xN.5422445392_5t2j.jpg)

# iaeste-agh-website

## [CSS variables](https://www.w3schools.com/css/css3_variables.asp) available

Shadows should be used all together, I will change this so they are a single variable, so use --shadows-default

This is a list of the variables and their respective values, if you want to use the variable use e.g.

```CSS
.some-class-name {
  color: var(--name-of-the-variable);
}
```

| Variable Name                      | Value                                                                                                                                                                                                                          |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| border                             | `2px solid rgba(220, 232, 241, 0.5)`                                                                                                                                                                                           |
| borderRadius-default               | `24px`                                                                                                                                                                                                                         |
| borderRadius-sm                    | `8px`                                                                                                                                                                                                                          |
| borderRadius-md                    | `16px`                                                                                                                                                                                                                         |
| borderRadius-lg                    | `24px`                                                                                                                                                                                                                         |
| spacing-default                    | `32px`                                                                                                                                                                                                                         |
| spacing-xs                         | `16px`                                                                                                                                                                                                                         |
| spacing-sm                         | `24px`                                                                                                                                                                                                                         |
| spacing-md                         | `32px`                                                                                                                                                                                                                         |
| spacing-lg                         | `48px`                                                                                                                                                                                                                         |
| spacing-xl                         | `96px`                                                                                                                                                                                                                         |
| colors-background-primary          | `#ffffff` <span style="display:inline-block;width:12px;height:12px;background-color:#ffffff;"></span>                                                                                                                          |
| colors-background-secondary        | `#ffffff` <span style="display:inline-block;width:12px;height:12px;background-color:#ffffff;"></span>                                                                                                                          |
| colors-background-accent           | `rgba(220, 232, 241, 0.5)` <span style="display:inline-block;width:12px;height:12px;background-color:rgba(220, 232, 241, 0.5);"></span>                                                                                        |
| colors-accent-primary              | `#0B3D59` <span style="display:inline-block;width:12px;height:12px;background-color:#0B3D59;"></span>                                                                                                                          |
| colors-accent-secondary            | `#1B75BB` <span style="display:inline-block;width:12px;height:12px;background-color:#1B75BB;"></span>                                                                                                                          |
| colors-text-default                | `#000000` <span style="display:inline-block;width:12px;height:12px;background-color:#000000;"></span>                                                                                                                          |
| colors-text-contrast               | `#FFFFFF` <span style="display:inline-block;width:12px;height:12px;background-color:#FFFFFF;"></span>                                                                                                                          |
| colors-text-contrastLight          | `#DCE8F1` <span style="display:inline-block;width:12px;height:12px;background-color:#DCE8F1;"></span>                                                                                                                          |
| colors-text-link                   | `#0B3D59` <span style="display:inline-block;width:12px;height:12px;background-color:#0B3D59;"></span>                                                                                                                          |
| colors-text-linkContrast           | `#ffffff` <span style="display:inline-block;width:12px;height:12px;background-color:#ffffff;"></span>                                                                                                                          |
| colors-gradients-iaeste_gradient_1 | `linear-gradient(90deg, #1B75BB, #27A9E1, #49C0B5)` <span style="display:inline-block;width:12px;height:12px;background:linear-gradient(90deg, #1B75BB, #27A9E1, #49C0B5);"></span>                                            |
| colors-gradients-iaeste_gradient_2 | `linear-gradient(90deg, #38B449, #8CC63E, #D6DF23)` <span style="display:inline-block;width:12px;height:12px;background:linear-gradient(90deg, #38B449, #8CC63E, #D6DF23);"></span>                                            |
| colors-gradients-iaeste_gradient_3 | `linear-gradient(90deg, #EF4036, #F05A28, #F7931D)` <span style="display:inline-block;width:12px;height:12px;background:linear-gradient(90deg, #EF4036, #F05A28, #F7931D);"></span>                                            |
| colors-gradients-iaeste_gradient_4 | `linear-gradient(90deg, #652C90, #91268F, #D91B5B)` <span style="display:inline-block;width:12px;height:12px;background:linear-gradient(90deg, #652C90, #91268F, #D91B5B);"></span>                                            |
| colors-gradients-iaeste_gradient_5 | `linear-gradient(90deg, #F6F18F, #F7DC3C, #FCB31E)` <span style="display:inline-block;width:12px;height:12px;background:linear-gradient(90deg, #F6F18F, #F7DC3C, #FCB31E);"></span>                                            |
| shadows-default                    | `43px 89px 28px 0px rgba(163, 163, 163, 0), 28px 57px 25px 0px rgba(163, 163, 163, 0.01), 7px 14px 16px 0px rgba(163, 163, 163, 0.09), 16px 32px 21px 0px rgba(163, 163, 163, 0.05), 2px 4px 9px 0px rgba(163, 163, 163, 0.1)` |

## Design pattern

This project will be using the [Atomic Design Pattern](https://atomicdesign.bradfrost.com/chapter-2/)

## Development Environment Setup

This project can be easily set up using **Docker** and **Dev Containers** in **Visual Studio Code**. Follow these steps to get your environment up and running quickly.

## Prerequisites

Make sure you have the following installed on your system:

- [Docker](https://www.docker.com/products/docker-desktop) (version 27.3.1 or later)
- [Visual Studio Code](https://code.visualstudio.com/) (version 1.95 or later)
- [Dev Containers extension for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

## Using Dev Containers in VS Code

For a more integrated experience, use Dev Containers with Visual Studio Code

### 1. Open the Repository in VS Code

Open your cloned repository in Visual Studio Code

### 2. Open in Dev Container

If you have the Dev Containers extension installed

1. Click on the **Dev Containers** icon in the lower-left corner of the window.
2. Select **Reopen in Container**. This will start the Dev Container setup process based on the `.devcontainer` configuration in the repository

### 3. Work Within the Dev Container

Once the container has started, VS Code will open the project inside the Dev Container environment, allowing you to: - Access all required dependencies (Node, Prettier, etc.) pre-installed. - Use terminal commands and tools as if they were installed locally. - Run and debug the application directly within the Dev Container.

> **Note**: Make sure to review the `.devcontainer/Dockerfile` and `.devcontainer/devcontainer.json` files to understand the installed dependencies and settings

### 4. Running the Application

You can now run the application as you would locally. For example, if this is a Node.js project: `npm run start`

## Additional Configuration

- **Port Forwarding**: Ensure the correct ports are specified in `devcontainer.json` for port forwarding.
- **Environment Variables**: You can add environment variables in `.devcontainer/devcontainer.json` under the `"containerEnv"` property

## Troubleshooting

If you encounter issues with Dev Containers or Docker setup:

- Make sure Docker is running and you have access to Docker CLI.
- Restart Visual Studio Code and try **Reopen in Container** again.
- Check the logs in the **Dev Containers** output for more detailed error messages.
