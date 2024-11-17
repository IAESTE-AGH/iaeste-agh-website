# iaeste-agh-website

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
