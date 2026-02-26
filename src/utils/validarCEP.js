import * as turf from '@turf/turf';

export function pontoDentroDoPoligono(latitude, longitude, poligono) {
    if (latitude === null || longitude === null ) {
        return false;
    }

    const ponto = turf.point([longitude, latitude]);
    const area = turf.polygon(poligono.coordinates);

    return turf.booleanPointInPolygon(ponto, area);
};
