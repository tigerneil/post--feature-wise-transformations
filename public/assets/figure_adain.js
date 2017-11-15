function buildFigure () {
    function styleFigure () {
        // --- Retrieve svg element -------------------------------------------
        var svg = d3.select("div.figure#adain-diagram").select("svg");

        // --- Clear element-specific styling ---------------------------------
        svg.selectAll(".figure-element, .figure-group, .figure-line, .figure-path")
            .style("fill", null)
            .style("stroke", null);
        svg.selectAll(".figure-text").style("font-size", null);

        // --- Create figure elements -----------------------------------------
        // Content image
        svg.append("image")
            .attrs({
                "width": 96, "height": 96,
                "x": svg.select("#content-image-placeholder").attr("x"),
                "y": svg.select("#content-image-placeholder").attr("y"),
                "href": "assets/tuebingen_neckarfront.jpg",
            });
        // Style image
        svg.append("image")
            .attrs({
                "width": 96, "height": 96,
                "x": svg.select("#style-image-placeholder").attr("x"),
                "y": svg.select("#style-image-placeholder").attr("y"),
                "href": "assets/cassis_cap_lombard_opus_196.jpg",
            });
        // Stylized image
        svg.append("image")
            .attrs({
                "width": 96, "height": 96,
                "x": svg.select("#stylized-image-placeholder").attr("x"),
                "y": svg.select("#stylized-image-placeholder").attr("y"),
                "href": "assets/tuebingen_neckarfront_cassis_cap_lombard_opus_196.jpg",
            });
    }

    d3.xml("assets/adain.svg").mimeType("image/svg+xml").get(function(error, xml) {
        if (error) throw error;
        d3.select("div.figure#adain-diagram").each(function () {
            this.appendChild(xml.documentElement);
        });
        styleFigure();
    });
}

buildFigure();
