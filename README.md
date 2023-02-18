# Cefiro

## Requirements
- YARN
```cmd
corepack enable
corepack prepare yarn@stable --activate
```

- Visual Studio Tools (for running Windows Desktop app)
```ps1
Set-ExecutionPolicy Unrestricted -Scope Process -Force;
iex (New-Object System.Net.WebClient).DownloadString('https://aka.ms/rnw-vs2022-deps.ps1');
```


## Installing dependencies
```cmd
yarn install
```

## Running the project
```cmd
yarn start
```