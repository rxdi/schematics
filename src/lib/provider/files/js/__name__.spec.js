import 'jest';
import { Container, createTestBed } from '@gapi/core';
import { <%= classify(name) %> } from './<%= name %>';

describe('<%= classify(name) %> Injectable', () => {
  beforeAll(async () => {
    await createTestBed({
      imports: [],
      services: [<%= classify(name) %>]
    }).toPromise();
  });

  it('should be defined', async done => {
    expect(Container.has(<%= classify(name) %>)).toBeTruthy();
  });
});
