type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/api/public/dataset-items-POST': {
        parameters: [
            {
                name: 'datasetName'
            },
            {
                name: 'input'
            },
            {
                name: 'expectedOutput'
            },
            {
                name: 'id'
            },
        ]
    },
    '/api/public/dataset-items/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/public/dataset-run-items-POST': {
        parameters: [
            {
                name: 'runName'
            },
            {
                name: 'datasetItemId'
            },
            {
                name: 'observationId'
            },
        ]
    },
    '/api/public/datasets-POST': {
        parameters: [
            {
                name: 'name'
            },
        ]
    },
    '/api/public/datasets/{datasetName}-GET': {
        parameters: [
            {
                name: 'datasetName'
            },
        ]
    },
    '/api/public/datasets/{datasetName}/runs/{runName}-GET': {
        parameters: [
            {
                name: 'datasetName'
            },
            {
                name: 'runName'
            },
        ]
    },
    '/api/public/health-GET': {
        parameters: [
        ]
    },
    '/api/public/ingestion-POST': {
        parameters: [
            {
                name: 'batch'
            },
        ]
    },
    '/api/public/metrics/daily-GET': {
        parameters: [
            {
                name: 'page'
            },
            {
                name: 'limit'
            },
            {
                name: 'traceName'
            },
            {
                name: 'userId'
            },
            {
                name: 'tags'
            },
        ]
    },
    '/api/public/observations/{observationId}-GET': {
        parameters: [
            {
                name: 'observationId'
            },
        ]
    },
    '/api/public/observations-GET': {
        parameters: [
            {
                name: 'page'
            },
            {
                name: 'limit'
            },
            {
                name: 'name'
            },
            {
                name: 'userId'
            },
            {
                name: 'type'
            },
            {
                name: 'traceId'
            },
            {
                name: 'parentObservationId'
            },
        ]
    },
    '/api/public/projects-GET': {
        parameters: [
        ]
    },
    '/api/public/prompts-POST': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'isActive'
            },
            {
                name: 'prompt'
            },
            {
                name: 'config'
            },
        ]
    },
    '/api/public/prompts-GET': {
        parameters: [
            {
                name: 'name'
            },
            {
                name: 'version'
            },
        ]
    },
    '/api/public/scores-POST': {
        parameters: [
            {
                name: 'traceId'
            },
            {
                name: 'name'
            },
            {
                name: 'value'
            },
            {
                name: 'id'
            },
            {
                name: 'observationId'
            },
            {
                name: 'comment'
            },
        ]
    },
    '/api/public/scores/{scoreId}-DELETE': {
        parameters: [
            {
                name: 'scoreId'
            },
        ]
    },
    '/api/public/scores-GET': {
        parameters: [
            {
                name: 'page'
            },
            {
                name: 'limit'
            },
            {
                name: 'userId'
            },
            {
                name: 'name'
            },
        ]
    },
    '/api/public/scores/{scoreId}-GET': {
        parameters: [
            {
                name: 'scoreId'
            },
        ]
    },
    '/api/public/sessions/{sessionId}-GET': {
        parameters: [
            {
                name: 'sessionId'
            },
        ]
    },
    '/api/public/traces/{traceId}-GET': {
        parameters: [
            {
                name: 'traceId'
            },
        ]
    },
    '/api/public/traces-GET': {
        parameters: [
            {
                name: 'page'
            },
            {
                name: 'limit'
            },
            {
                name: 'userId'
            },
            {
                name: 'name'
            },
            {
                name: 'orderBy'
            },
            {
                name: 'tags'
            },
        ]
    },
}