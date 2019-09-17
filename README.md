# Vue Cross Platform (VueXP)

Cross Platform application development with VueJs. Write once deploy everywhere!

## Project setup
```
npm install
```

## Lints and fixes files
```
npm run lint
```

## Run unit tests
```
npm run test:unit
```

## How initialize a VueXP project

There are two options to initialize a VueXP project;  integrating it into an existing project or creating a brand new project. But, first of all you need to make sure that vue-cli is installed. 

```  
npm install -g @vue/cli @vue/cli-init
```

### Option 1: Creating a brand new project 
```
# create new Vue.js project
vue create brand-new-vuexp-project

# go into the new project folder
cd brand-new-vuexp-project

# add vue-cli-plugin-vuexp to the new project
vue add vue-cli-plugin-vuexp
```

### Option 2: Integrate in to an existing Vue.js project
``` 
# go into the new project folder
cd existing-vuejs-project 

# add vue-cli-plugin-vuexp to the project
vue add vue-cli-plugin-vuexp
``` 

After you added vue-cli-plugin-vuexp you need to answer some questions to configure your VueXP project. See vue-cli-plugin-vuexp [documentation](https://github.com/vuexp/vue-cli-plugin-vuexp) for details. 
