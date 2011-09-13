git clone --depth 1 git://github.com/joyent/node.git # or git clone git://github.com/joyent/node.git if you want to checkout a stable tag
cd node
git checkout v0.4.11 # optional.  Note that master is unstable.
export JOBS=2 # optional, sets number of parallel commands.
mkdir ~/local
./configure --prefix=$HOME/local/node
make
make install
echo 'export PATH=$HOME/local/node/bin:$PATH' >> ~/.profile
echo 'export NODE_PATH=$HOME/local/node:$HOME/local/node/lib/node_modules' >> ~/.profile
source ~/.profile
