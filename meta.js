module.exports = {
  "helpers": {
    "if_falsy": function (v1, options) {
      return v1
        ? options.inverse(this)
        : options.fn(this);
    },
    "authorFullNameFrom": function (author) {
      const startPosition = author.indexOf('<')
      return author.slice(0, startPosition - 1)
    },
    "authorEmailFrom": function (author) {
      const startPosition = author.indexOf('<')
      const endPosition = author.indexOf('>')
      return author.slice(startPosition + 1, endPosition)
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Plugin name"
    },
    "version": {
      "type": "string",
      "message": "Project version",
      "default": "0.0.1"
    },
    "description": {
      "type": "string",
      "message": "Project description",
      "default": "A Vue.js Plugin"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "git": {
      "type": "string",
      "message": "Git repository"
    },
    "component": {
      "type": "confirm",
      "message": "If you need custom components?"
    },
    "lintConfig": {
      "type": "list",
      "message": "Pick an ESLint preset",
      "choices": [
        {
          "name": "Standard (https://github.com/feross/standard)",
          "value": "standard",
          "short": "Standard"
        },
        {
          "name": "none (configure it yourself)",
          "value": "none",
          "short": "none"
        }
      ]
    },
    "license": {
      "type": "string",
      "message": "Repository license",
      "default": "MIT"
    }
  },
  "filters": {
    "src/components/**/*": "component"
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install or yarn"
};
