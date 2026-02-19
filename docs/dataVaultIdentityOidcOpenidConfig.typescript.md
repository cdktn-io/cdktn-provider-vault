# `dataVaultIdentityOidcOpenidConfig` Submodule <a name="`dataVaultIdentityOidcOpenidConfig` Submodule" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultIdentityOidcOpenidConfig <a name="DataVaultIdentityOidcOpenidConfig" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/identity_oidc_openid_config vault_identity_oidc_openid_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer"></a>

```typescript
import { dataVaultIdentityOidcOpenidConfig } from '@cdktn/provider-vault'

new dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig(scope: Construct, id: string, config: DataVaultIdentityOidcOpenidConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig">DataVaultIdentityOidcOpenidConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig">DataVaultIdentityOidcOpenidConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultIdentityOidcOpenidConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isConstruct"></a>

```typescript
import { dataVaultIdentityOidcOpenidConfig } from '@cdktn/provider-vault'

dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isTerraformElement"></a>

```typescript
import { dataVaultIdentityOidcOpenidConfig } from '@cdktn/provider-vault'

dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isTerraformDataSource"></a>

```typescript
import { dataVaultIdentityOidcOpenidConfig } from '@cdktn/provider-vault'

dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.generateConfigForImport"></a>

```typescript
import { dataVaultIdentityOidcOpenidConfig } from '@cdktn/provider-vault'

dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataVaultIdentityOidcOpenidConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultIdentityOidcOpenidConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultIdentityOidcOpenidConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/identity_oidc_openid_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultIdentityOidcOpenidConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.grantTypesSupported">grantTypesSupported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.idTokenSigningAlgValuesSupported">idTokenSigningAlgValuesSupported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.jwksUri">jwksUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.requestUriParameterSupported">requestUriParameterSupported</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.responseTypesSupported">responseTypesSupported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.scopesSupported">scopesSupported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.subjectTypesSupported">subjectTypesSupported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.tokenEndpointAuthMethodsSupported">tokenEndpointAuthMethodsSupported</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.userinfoEndpoint">userinfoEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.authorizationEndpoint"></a>

```typescript
public readonly authorizationEndpoint: string;
```

- *Type:* string

---

##### `grantTypesSupported`<sup>Required</sup> <a name="grantTypesSupported" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.grantTypesSupported"></a>

```typescript
public readonly grantTypesSupported: string[];
```

- *Type:* string[]

---

##### `idTokenSigningAlgValuesSupported`<sup>Required</sup> <a name="idTokenSigningAlgValuesSupported" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.idTokenSigningAlgValuesSupported"></a>

```typescript
public readonly idTokenSigningAlgValuesSupported: string[];
```

- *Type:* string[]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `jwksUri`<sup>Required</sup> <a name="jwksUri" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.jwksUri"></a>

```typescript
public readonly jwksUri: string;
```

- *Type:* string

---

##### `requestUriParameterSupported`<sup>Required</sup> <a name="requestUriParameterSupported" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.requestUriParameterSupported"></a>

```typescript
public readonly requestUriParameterSupported: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `responseTypesSupported`<sup>Required</sup> <a name="responseTypesSupported" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.responseTypesSupported"></a>

```typescript
public readonly responseTypesSupported: string[];
```

- *Type:* string[]

---

##### `scopesSupported`<sup>Required</sup> <a name="scopesSupported" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.scopesSupported"></a>

```typescript
public readonly scopesSupported: string[];
```

- *Type:* string[]

---

##### `subjectTypesSupported`<sup>Required</sup> <a name="subjectTypesSupported" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.subjectTypesSupported"></a>

```typescript
public readonly subjectTypesSupported: string[];
```

- *Type:* string[]

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

---

##### `tokenEndpointAuthMethodsSupported`<sup>Required</sup> <a name="tokenEndpointAuthMethodsSupported" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.tokenEndpointAuthMethodsSupported"></a>

```typescript
public readonly tokenEndpointAuthMethodsSupported: string[];
```

- *Type:* string[]

---

##### `userinfoEndpoint`<sup>Required</sup> <a name="userinfoEndpoint" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.userinfoEndpoint"></a>

```typescript
public readonly userinfoEndpoint: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultIdentityOidcOpenidConfigConfig <a name="DataVaultIdentityOidcOpenidConfigConfig" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.Initializer"></a>

```typescript
import { dataVaultIdentityOidcOpenidConfig } from '@cdktn/provider-vault'

const dataVaultIdentityOidcOpenidConfigConfig: dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.name">name</a></code> | <code>string</code> | The name of the provider. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/identity_oidc_openid_config#id DataVaultIdentityOidcOpenidConfig#id}. |
| <code><a href="#@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/identity_oidc_openid_config#name DataVaultIdentityOidcOpenidConfig#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/identity_oidc_openid_config#id DataVaultIdentityOidcOpenidConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultIdentityOidcOpenidConfig.DataVaultIdentityOidcOpenidConfigConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/identity_oidc_openid_config#namespace DataVaultIdentityOidcOpenidConfig#namespace}

---



