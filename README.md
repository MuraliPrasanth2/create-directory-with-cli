## This NPM package will help to create directories easily using command line interface.

----------
#### How to install:
```
npm i -g create-directory-with-cli
```
----------
#### How to use:
1. Go to the location where you want to create the directory or directories.
2. Type the below command in the terminal. Make sure to modify the directoryName in the below command with the name you want.
  
##### Creating single directory
```
nmkdir directoryName
```
##### *example:*
```
nmkdir pages
```

##### Creating multiple directories
```
nmkdir directoryName1 directoryName2
```
##### *example:*
```
nmkdir pages contexts hooks components firebase
```
----------
#### What it will do:

This creates a directory with the given directoryName name as in the below structure.

```
├── currentDirectoryInTerminal
    ├── directoryName1
    ├── directoryName2
```