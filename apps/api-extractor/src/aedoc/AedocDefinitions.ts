// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import {
  TSDocParserConfiguration,
  TSDocTagDefinition,
  TSDocTagSyntaxKind,
  StandardTags
} from '@microsoft/tsdoc';

export class AedocDefinitions {
  public static readonly betaDocumentation: TSDocTagDefinition = new TSDocTagDefinition({
    tagName: '@betaDocumentation',
    syntaxKind: TSDocTagSyntaxKind.ModifierTag
  });

  public static readonly internalRemarks: TSDocTagDefinition = new TSDocTagDefinition({
    tagName: '@internalRemarks',
    syntaxKind: TSDocTagSyntaxKind.BlockTag
  });

  public static readonly preapprovedTag: TSDocTagDefinition = new TSDocTagDefinition({
    tagName: '@preapproved',
    syntaxKind: TSDocTagSyntaxKind.ModifierTag
  });

  public static get parserConfiguration(): TSDocParserConfiguration {
    if (!AedocDefinitions._parserConfiguration) {
      const configuration: TSDocParserConfiguration = new TSDocParserConfiguration();
      configuration.addTagDefinitions([
        AedocDefinitions.betaDocumentation,
        AedocDefinitions.internalRemarks,
        AedocDefinitions.preapprovedTag
      ], true);

      configuration.setSupportForTags(
        [
          StandardTags.alpha,
          StandardTags.beta,
          StandardTags.defaultValue,
          StandardTags.deprecated,
          StandardTags.eventProperty,
          StandardTags.example,
          StandardTags.inheritDoc,
          StandardTags.internal,
          StandardTags.link,
          StandardTags.override,
          StandardTags.packageDocumentation,
          StandardTags.param,
          StandardTags.privateRemarks,
          StandardTags.public,
          StandardTags.readonly,
          StandardTags.remarks,
          StandardTags.returns,
          StandardTags.sealed,
          StandardTags.virtual
        ],
        true
      );

      AedocDefinitions._parserConfiguration = configuration;
    }
    return AedocDefinitions._parserConfiguration;
  }

  private static _parserConfiguration: TSDocParserConfiguration | undefined;
}
