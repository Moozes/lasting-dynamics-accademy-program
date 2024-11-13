nvm (node version manager)
    a tool to manage different node versions on your device
    you might be working on multiple project and each project depends on a different node version

windows support
    nvm is only supported in linux and macOs but there is an alternative for windows
    nvm-windows: https://github.com/coreybutler/nvm-windows
    nvm installation guide https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/
        delete installed node
        install nvm
        install desired node versions
        install global packages for each node version like (npm i -g yarn)

usage
    nvm list: list currently installed node versions (an astric * will appear next to active node version)
    nvm install 18.16.1: install node v18.16.1
    nvm use 18.16.1: switch to using node v18.16.1