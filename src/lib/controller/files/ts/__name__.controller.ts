import { Controller, GraphQLControllerOptions, Query, Type, GraphQLObjectType, GraphQLString } from '@gapi/core';

export const <%= classify(name) %>Type = new GraphQLObjectType({
    name: '<%= classify(name) %>Type',
    fields: {
        init: {
            type: GraphQLString
        }
    }
});

@Controller<GraphQLControllerOptions>({
    guards: [],
    type: []
})
export class <%= classify(name) %>Controller {

    @Type(<%= classify(name) %>Type)
    @Query()
    initQuery() {
        return {}
    }
}
