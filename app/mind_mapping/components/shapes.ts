import 'jointjs';

export const shapesSVG = {
    double_circle: { type: 'standard.Circle', attrs: { 'r': 8 }, duplicate: 2, offset: 20 },
    single_circle: { type: 'standard.Circle', attrs: { 'r': 8 } },
    rect_and_circle: { type: 'standard.Rectangle', attrs: { width: 30, height: 30 }, magnet: { x: '100%', y: '25%' } },
    output: { type: 'standard.Rectangle', attrs: { width: 70, height: 30, text: { text: 'OUTPUT' } } },
    input: { type: 'standard.Rectangle', attrs: { width: 70, height: 30, text: { text: 'INPUT' } } },
    triangle_and_circle: { type: 'standard.Polygon', points: [{ x: 0, y: 0 }, { x: 20, y: 10 }, { x: 0, y: 20 }], magnet: { x: '100%', y: '50%' } },
    curved_line_with_circles: { type: 'standard.Path', d: 'M 0 0 L 0 20 C 30 20, 30 0, 0 0 Z', magnet: [{ x: '100%', y: '0%' }, { x: '100%', y: '100%' }] },
    double_curved_line_with_circles: { type: 'standard.Path', d: 'M 0 0 C 20 0, 30 10, 30 15 C 30 20, 20 30, 0 30', magnet: [{ x: '100%', y: '0%' }, { x: '100%', y: '100%' }] },
    horizontal_line: { type: 'standard.Path', d: 'M 0 10 L 40 10' },
    ellipse_with_inner_ellipse: { type: 'standard.Ellipse', rx: 25, ry: 15, innerRX: 10, innerRY: 5 },
    filled_ellipse: { type: 'standard.Ellipse', rx: 25, ry: 15, attrs: { body: { fill: 'navy' } } },
    multivalued: { type: 'standard.Ellipse', rx: 35, ry: 15, attrs: { text: { text: 'multivalued' } } },
    state: { type: 'standard.Rectangle', attrs: { width: 50, height: 30, text: { text: 'State' }, body: { fill: 'lightgray' } } },
    dashed_rect_and_circle: { type: 'standard.Rectangle', attrs: { width: 50, height: 40, strokeDasharray: '4 4' }, magnet: { x: '100%', y: '25%' } },
    ellipse: { type: 'standard.Ellipse', rx: 25, ry: 15 },
    cylinder: { type: 'standard.Path', d: 'M 0 5 C 5 10, 25 10, 30 5 M 0 35 L 30 35 M 0 5 C 5 0, 25 0, 30 5', attrs: { body: { fill: 'transparent' } } },
    isa: { type: 'standard.Polygon', points: [{ x: 10, y: 0 }, { x: 0, y: 20 }, { x: 20, y: 20 }], attrs: { body: { fill: 'gold' }, text: { text: 'ISA' } } },
    abstract: {type: 'standard.Rectangle', attrs: { width: 70, height: 30, text: { text: '<<Abstract>>' }, body: { fill: 'lightcoral' } } },
    interface: {type: 'standard.Rectangle', attrs: { width: 70, height: 30, text: { text: '<<Interface>>' }, body: { fill: 'lightgoldenrodyellow' } } },
    relationship: { type: 'standard.Polygon', points: [{ x: 10, y: 20 }, { x: 30, y: 0 }, { x: 50, y: 20 }, { x: 30, y: 40 }], attrs: { body: { fill: 'lightblue' }, text: { text: 'Relationship' } } },
    weak_entity: { type: 'standard.Rectangle', attrs: { width: 70, height: 30, text: { text: 'Weak Entity' }, strokeDasharray: '4 4', body: { fill: 'lightgreen' } } },
    entity: { type: 'standard.Rectangle', attrs: { width: 70, height: 30, text: { text: 'Entity' }, body: { fill: 'lightgreen' } } },
    identifying: { type: 'standard.Rectangle', attrs: { width: 70, height: 30, text: { text: 'identifying' }, body: { fill: 'lightblue' } } },
    derived: { type: 'standard.Ellipse', rx: 35, ry: 15, attrs: { text: { text: 'derived' }, body: { fill: 'orange' } } },
    key: { type: 'standard.Ellipse', rx: 25, ry: 15, attrs: { text: { text: 'key' }, body: { fill: 'gold' } } },

};