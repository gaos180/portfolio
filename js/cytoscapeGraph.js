document.addEventListener('DOMContentLoaded', function () {

    
    const data = `
Nombre del Fármaco	Nombre del Target	Tipo de interacción
Ibuprofen	Prostaglandin G/H synthase 2	inhibitor
Ibuprofen	Prostaglandin G/H synthase 1	inhibitor
Ibuprofen	Apoptosis regulator Bcl-2	modulator
Ibuprofen	Fatty acid-binding protein, intestinal	binder
Ibuprofen	Platelet glycoprotein Ib alpha chain	inducer
Ibuprofen	Protein S100-A7	inducer
Acetaminophen	Prostaglandin G/H synthase 2	inhibitor
Acetaminophen	Prostaglandin G/H synthase 1	inhibitor
Acetaminophen	Prostaglandin E synthase 3	inhibitor
Acetaminophen	Transient receptor potential cation channel subfamily V member 1	activator
Acetylsalicylic acid	Prostaglandin G/H synthase 1	inhibitor
Acetylsalicylic acid	Prostaglandin G/H synthase 2	inhibitor
Acetylsalicylic acid	NF-kappa-B inhibitor alpha	inhibitor
Acetylsalicylic acid	Tumor necrosis factor-inducible gene 6 protein	downregulator
Acetylsalicylic acid	Caspase-1	inhibitor
Acetylsalicylic acid	Caspase-1	downregulator
Acetylsalicylic acid	Caspase-3	inhibitor
Acetylsalicylic acid	Caspase-3	downregulator
Acetylsalicylic acid	G1/S-specific cyclin-D1	downregulator
Acetylsalicylic acid	Myc proto-oncogene protein	downregulator
Acetylsalicylic acid	Proliferating cell nuclear antigen	downregulator
Acetylsalicylic acid	Sialidase-1	inhibitor
    `;

    const lines = data.trim().split('\n');
    const headers = lines[0].split('\t');
    const interactions = [];

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split('\t');
        const interaction = {};
        for (let j = 0; j < headers.length; j++) {
            interaction[headers[j]] = values[j];
        }
        interactions.push(interaction);
    }
    
    const elements = [];
    const drugs = new Set();
    const targets = new Set();

    interactions.forEach(interaction => {
        const drugName = interaction['Nombre del Fármaco'];
        const targetName = interaction['Nombre del Target'];
        const interactionType = interaction['Tipo de interacción'];

        if (!drugs.has(drugName)) {
            elements.push({ data: { id: drugName, label: drugName, type: 'drug' } });
            drugs.add(drugName);
        }
        if (!targets.has(targetName)) {
            elements.push({ data: { id: targetName, label: targetName, type: 'target' } });
            targets.add(targetName);
        }

        elements.push({
            data: {
                source: drugName,
                target: targetName,
                label: interactionType,
                type: interactionType // Store interaction type for styling
            }
        });
    });

    const colorMap = {
        'inhibitor': 'red',
        'inducer': 'green',
        'modulator': 'blue',
        'binder': 'orange',
        'activator': 'purple',
        'downregulator': 'brown'
        // Add more colors as needed
    };


    var cy = cytoscape({
        
            container: document.getElementById('cyto'), // Seleccionar el div
            elements: elements,
            style: [
                {
                    selector: 'node[type="drug"]',
                    style: {
                        'background-fit': 'contain',
                        'background-image': 'url("./imgs/pill.webp")',
                        'background-color': '#a124c7',
                        'label': 'data(label)',
                        'text-outline-color': '#a124c7',
                        'text-outline-width': 1,
                        'width': 200,
                        'height': 200
                    }
                },
                {
                    selector: 'node[type="target"]',
                    style: {
                        'background-fit': 'contain',
                        'background-image': 'url("./imgs/target.webp")', 
                        'background-color': '#ffa800',
                        'label': 'data(label)',
                        'text-outline-color': '#ffa800',
                        'text-outline-width': 1,
                        'width': 200,
                        'height': 200
                    }
                },
                {
                    selector: 'edge',
                    style: {
                        'width': 2,
                        'label': 'data(label)',
                        'line-color': function (ele) {
                            return colorMap[ele.data('type')] || '#ccc';
                        },
                        'target-arrow-color': function (ele) {
                            return colorMap[ele.data('type')] || '#ccc';
                        },
                        'curve-style': 'bezier',
                        'target-arrow-shape': 'triangle',
                        'source-arrow-shape': 'triangle',
                    }
                }
            ],
            layout: {
                name: 'circle',
                animate: true,
                fit: true,
                padding: 50,
                nodeRepulsion: 4000
            }
        });

        document.getElementById('cyto').style.display = 'block';
        
      // Función para descargar la imagen como PNG
      document.getElementById('downloadBtn').addEventListener('click', function () {
        var png64 = cy.png({ scale: 3, full: true });
        var downloadLink = document.createElement('a');
        downloadLink.href = png64;
        downloadLink.download = 'druggraph.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    });

    // Funciones de disposición
    function applyCoseLayout() {
        cy.layout({
            name: 'cose',
            animate: true,
            fit: true,
            padding: 50,
            nodeRepulsion: 4000
        }).run();
    }

    function applyConcentricLayout() {
        cy.layout({
            name: 'concentric',
            animate: true,
            fit: true,
            padding: 50,
            nodeRepulsion: 4000
        }).run();
    }

    function applyCircleLayout() {
        cy.layout({
            name: 'circle',
            animate: true,
            fit: true,
            padding: 50,
            nodeRepulsion: 4000
        }).run();
    }

    function applyBreadthfirstLayout() {
        cy.layout({
            name: 'breadthfirst',
            animate: true,
            fit: true,
            padding: 50,
            nodeRepulsion: 4000
        }).run();
    }

    setTimeout(() => {
        applyCoseLayout(); 
    },1500);

    // Eventos para cambiar la disposición de los nodos
    document.getElementById('btn-cose').addEventListener('click', applyCoseLayout);
    document.getElementById('btn-concentric').addEventListener('click', applyConcentricLayout);
    document.getElementById('btn-circle').addEventListener('click', applyCircleLayout);
    document.getElementById('btn-breadthfirst').addEventListener('click', applyBreadthfirstLayout);
    
    });