console.log("Comprobando contenido en la carpeta /content...");

const fs = require("fs");
const path = require("path");

const contentDir = path.join(__dirname, "../content");

function checkContentFiles(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      checkContentFiles(filePath); // Comprueba subdirectorios recursivamente
    } else if (stats.isFile()) {
        // Comprueba si el archivo es un archivo JSON
      if (path.extname(file) == ".json") {
         try {
           const content = JSON.parse(fs.readFileSync(filePath, "utf8"));

           checkClassesStructure(content, filePath);
         } catch (error) {
           console.error(`Error: El archivo ${filePath} no es un JSON válido.`);
           process.exit(1);
         }
      }

      // Comprueba si el archivo está vacío
      if (stats.size === 0) {
        console.error(`Error: El archivo ${filePath} está vacío.`);
        process.exit(1);
      }
    }
  });
}

function checkClassesStructure(content, filePath) {
  if (!content.id || !content.name) {
    console.error(`Error: El archivo ${filePath} no tiene la estructura correcta. Debe contener "id" y "name".`);
    process.exit(1);
  }

  if (skillChoices.choose <= 0 
    || skillChoices.choose == undefined
    || skillChoices.choose == null
    ) {
    console.error(`Error: El archivo ${filePath} tiene un valor inválido para "skillChoices.choose". Debe ser mayor que 0.`);
    process.exit(1);
  }

  if (!Array.isArray(skillChoices.from) || skillChoices.from.length === 0) {
    console.error(`Error: El archivo ${filePath} tiene un valor inválido para "skillChoices.from". Debe ser un array no vacío.`);
    process.exit(1);
  }
}

checkContentFiles(contentDir);
console.log("Comprobación de contenido completada con éxito.");