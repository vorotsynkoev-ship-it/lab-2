var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_lab1_2 = new ol.format.GeoJSON();
var features_lab1_2 = format_lab1_2.readFeatures(json_lab1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lab1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lab1_2.addFeatures(features_lab1_2);
var lyr_lab1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lab1_2, 
                style: style_lab1_2,
                popuplayertitle: 'lab1',
                interactive: true,
                title: '<img src="styles/legend/lab1_2.png" /> lab1'
            });
var format_building_house_3 = new ol.format.GeoJSON();
var features_building_house_3 = format_building_house_3.readFeatures(json_building_house_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_3.addFeatures(features_building_house_3);
var lyr_building_house_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_house_3, 
                style: style_building_house_3,
                popuplayertitle: 'building_house',
                interactive: true,
                title: '<img src="styles/legend/building_house_3.png" /> building_house'
            });
var format_building_4 = new ol.format.GeoJSON();
var features_building_4 = format_building_4.readFeatures(json_building_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_4.addFeatures(features_building_4);
var lyr_building_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_4, 
                style: style_building_4,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_4.png" /> building'
            });
var format_building_5 = new ol.format.GeoJSON();
var features_building_5 = format_building_5.readFeatures(json_building_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_5.addFeatures(features_building_5);
var lyr_building_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_5, 
                style: style_building_5,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_5.png" /> building'
            });
var format_highway_6 = new ol.format.GeoJSON();
var features_highway_6 = format_highway_6.readFeatures(json_highway_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_6.addFeatures(features_highway_6);
var lyr_highway_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_6, 
                style: style_highway_6,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_6.png" /> highway'
            });
var format_highway_7 = new ol.format.GeoJSON();
var features_highway_7 = format_highway_7.readFeatures(json_highway_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_7.addFeatures(features_highway_7);
var lyr_highway_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_7, 
                style: style_highway_7,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_7.png" /> highway'
            });

lyr_YandexSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_lab1_2.setVisible(true);lyr_building_house_3.setVisible(true);lyr_building_4.setVisible(true);lyr_building_5.setVisible(true);lyr_highway_6.setVisible(true);lyr_highway_7.setVisible(true);
var layersList = [lyr_YandexSatellite_0,lyr_OSMStandard_1,lyr_lab1_2,lyr_building_house_3,lyr_building_4,lyr_building_5,lyr_highway_6,lyr_highway_7];
lyr_lab1_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_building_house_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_building_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building:part': 'building:part', });
lyr_building_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:street': 'addr:street', 'religion': 'religion', 'amenity': 'amenity', 'shop': 'shop', 'sport': 'sport', 'leisure': 'leisure', 'addr:place': 'addr:place', 'building:levels': 'building:levels', 'type': 'type', 'name': 'name', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'address': 'address', });
lyr_highway_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'public_transport': 'public_transport', 'name': 'name', 'bus': 'bus', 'crossing': 'crossing', });
lyr_highway_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'lit': 'lit', 'service': 'service', 'footway': 'footway', 'ref': 'ref', 'old_ref': 'old_ref', 'oneway': 'oneway', 'surface': 'surface', 'smoothness': 'smoothness', 'layer': 'layer', 'bridge': 'bridge', 'bicycle': 'bicycle', 'access': 'access', 'name': 'name', 'ramp': 'ramp', 'incline': 'incline', 'handrail': 'handrail', 'foot': 'foot', });
lyr_lab1_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_building_house_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_building_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building:part': '', });
lyr_building_5.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'addr:street': 'TextEdit', 'religion': 'TextEdit', 'amenity': 'TextEdit', 'shop': 'TextEdit', 'sport': 'TextEdit', 'leisure': 'TextEdit', 'addr:place': 'TextEdit', 'building:levels': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'address': 'TextEdit', });
lyr_highway_6.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'public_transport': '', 'name': '', 'bus': '', 'crossing': '', });
lyr_highway_7.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'lit': '', 'service': '', 'footway': '', 'ref': '', 'old_ref': '', 'oneway': '', 'surface': '', 'smoothness': '', 'layer': '', 'bridge': '', 'bicycle': '', 'access': '', 'name': '', 'ramp': '', 'incline': '', 'handrail': '', 'foot': '', });
lyr_lab1_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_building_house_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', });
lyr_building_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building:part': 'no label', });
lyr_building_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:street': 'no label', 'religion': 'no label', 'amenity': 'no label', 'shop': 'no label', 'sport': 'no label', 'leisure': 'no label', 'addr:place': 'no label', 'building:levels': 'no label', 'type': 'no label', 'name': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'address': 'no label', });
lyr_highway_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'public_transport': 'no label', 'name': 'no label', 'bus': 'no label', 'crossing': 'no label', });
lyr_highway_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'lit': 'no label', 'service': 'no label', 'footway': 'no label', 'ref': 'no label', 'old_ref': 'no label', 'oneway': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'layer': 'no label', 'bridge': 'no label', 'bicycle': 'no label', 'access': 'no label', 'name': 'no label', 'ramp': 'no label', 'incline': 'no label', 'handrail': 'no label', 'foot': 'no label', });
lyr_highway_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});