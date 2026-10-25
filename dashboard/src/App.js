npx create-react-app ohcs-dashboard
cd ohcs-dashboard
npm install --save gh-pages
git init
git add .
git commit -m "OHCS dashboard"
git remote add origin https://github.com/smithengineering1/ohcs-dashboard.git
git push -u origin main
npm run deploy
npm run build
npm run deploy
