function walk(node)
{
	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

    v = v.replace(/\bMachine Learning\b/g, "A computer");
    v = v.replace(/\bMachine learning\b/g, "A computer");
	v = v.replace(/\.( )*\bMachine Learning\b/g, ". A computer");
    v = v.replace(/\.( )*\bDeep Learning\b/g, ". A computer");
    v = v.replace(/\bArtificial Neural Network\b/g, "A computer");
    v = v.replace(/\bArtificial neural network\b/g, "a computer");
    v = v.replace(/\bArtificial neural networks\b/g, "Computers");
    v = v.replace(/\ban Artificial neural network\b/g, "a computer");
    v = v.replace(/\bneural networks\b/g, "computers");
    v = v.replace(/\ban AI\b/g, "a computer");
    v = v.replace(/\ban Artificial intelligence\b/g, "a computer");
    v = v.replace(/\ban artificial intelligence\b/g, "a computer");
    v = v.replace(/\.( )*\bNeural Network\b/g, ". A computer");
    v = v.replace(/\bneural network\b/g, "a computer");
    v = v.replace(/\bAI\b/g, "a computer");
    v = v.replace(/\bArtificial intelligence\b/g, "a computer");
    v = v.replace(/\bDeep Learning\b/g, "A computer");
    v = v.replace(/\bDeep learning\b/g, "A computer");
    v = v.replace(/\bdeep learning\b/g, "A computer");
    v = v.replace(/\bDeepmind\b/g, "Google's computer");
    v = v.replace(/\bIBM Watson\b/g, "IBM's computer");
    v = v.replace(/\bArtificial Intelligence\b/g, "A computer");
    v = v.replace(/\bAmazon SageMaker\b/g, "Amazon's computer");
    v = v.replace(/\bmachine learning\b/g, "a computer");
    v = v.replace(/\bdeep learning on AWS\b/g, "Amazon's computer");
    v = v.replace(/\bdeep-learning\b/g, "a computer");
    

	textNode.nodeValue = v;
}

walk(document.body);

new MutationObserver(function() {
  walk(document.body);
}).observe(document.body, {
  childList: true
});