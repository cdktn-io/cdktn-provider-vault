# `dataVaultPkiSecretBackendIssuer` Submodule <a name="`dataVaultPkiSecretBackendIssuer` Submodule" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultPkiSecretBackendIssuer <a name="DataVaultPkiSecretBackendIssuer" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/pki_secret_backend_issuer vault_pki_secret_backend_issuer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer"></a>

```typescript
import { dataVaultPkiSecretBackendIssuer } from '@cdktn/provider-vault'

new dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer(scope: Construct, id: string, config: DataVaultPkiSecretBackendIssuerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig">DataVaultPkiSecretBackendIssuerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig">DataVaultPkiSecretBackendIssuerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisableCriticalExtensionChecks">resetDisableCriticalExtensionChecks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisableNameChecks">resetDisableNameChecks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisableNameConstraintChecks">resetDisableNameConstraintChecks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisablePathLengthChecks">resetDisablePathLengthChecks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDisableCriticalExtensionChecks` <a name="resetDisableCriticalExtensionChecks" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisableCriticalExtensionChecks"></a>

```typescript
public resetDisableCriticalExtensionChecks(): void
```

##### `resetDisableNameChecks` <a name="resetDisableNameChecks" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisableNameChecks"></a>

```typescript
public resetDisableNameChecks(): void
```

##### `resetDisableNameConstraintChecks` <a name="resetDisableNameConstraintChecks" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisableNameConstraintChecks"></a>

```typescript
public resetDisableNameConstraintChecks(): void
```

##### `resetDisablePathLengthChecks` <a name="resetDisablePathLengthChecks" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisablePathLengthChecks"></a>

```typescript
public resetDisablePathLengthChecks(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultPkiSecretBackendIssuer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isConstruct"></a>

```typescript
import { dataVaultPkiSecretBackendIssuer } from '@cdktn/provider-vault'

dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isTerraformElement"></a>

```typescript
import { dataVaultPkiSecretBackendIssuer } from '@cdktn/provider-vault'

dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isTerraformDataSource"></a>

```typescript
import { dataVaultPkiSecretBackendIssuer } from '@cdktn/provider-vault'

dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.generateConfigForImport"></a>

```typescript
import { dataVaultPkiSecretBackendIssuer } from '@cdktn/provider-vault'

dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataVaultPkiSecretBackendIssuer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultPkiSecretBackendIssuer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultPkiSecretBackendIssuer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/pki_secret_backend_issuer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultPkiSecretBackendIssuer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.caChain">caChain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerId">issuerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerName">issuerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.leafNotAfterBehavior">leafNotAfterBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.manualChain">manualChain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.usage">usage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableCriticalExtensionChecksInput">disableCriticalExtensionChecksInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameChecksInput">disableNameChecksInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameConstraintChecksInput">disableNameConstraintChecksInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disablePathLengthChecksInput">disablePathLengthChecksInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerRefInput">issuerRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableCriticalExtensionChecks">disableCriticalExtensionChecks</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameChecks">disableNameChecks</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameConstraintChecks">disableNameConstraintChecks</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disablePathLengthChecks">disablePathLengthChecks</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerRef">issuerRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `caChain`<sup>Required</sup> <a name="caChain" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.caChain"></a>

```typescript
public readonly caChain: string[];
```

- *Type:* string[]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `issuerId`<sup>Required</sup> <a name="issuerId" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerId"></a>

```typescript
public readonly issuerId: string;
```

- *Type:* string

---

##### `issuerName`<sup>Required</sup> <a name="issuerName" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerName"></a>

```typescript
public readonly issuerName: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `leafNotAfterBehavior`<sup>Required</sup> <a name="leafNotAfterBehavior" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.leafNotAfterBehavior"></a>

```typescript
public readonly leafNotAfterBehavior: string;
```

- *Type:* string

---

##### `manualChain`<sup>Required</sup> <a name="manualChain" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.manualChain"></a>

```typescript
public readonly manualChain: string[];
```

- *Type:* string[]

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.usage"></a>

```typescript
public readonly usage: string;
```

- *Type:* string

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `disableCriticalExtensionChecksInput`<sup>Optional</sup> <a name="disableCriticalExtensionChecksInput" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableCriticalExtensionChecksInput"></a>

```typescript
public readonly disableCriticalExtensionChecksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableNameChecksInput`<sup>Optional</sup> <a name="disableNameChecksInput" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameChecksInput"></a>

```typescript
public readonly disableNameChecksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableNameConstraintChecksInput`<sup>Optional</sup> <a name="disableNameConstraintChecksInput" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameConstraintChecksInput"></a>

```typescript
public readonly disableNameConstraintChecksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disablePathLengthChecksInput`<sup>Optional</sup> <a name="disablePathLengthChecksInput" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disablePathLengthChecksInput"></a>

```typescript
public readonly disablePathLengthChecksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `issuerRefInput`<sup>Optional</sup> <a name="issuerRefInput" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerRefInput"></a>

```typescript
public readonly issuerRefInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `disableCriticalExtensionChecks`<sup>Required</sup> <a name="disableCriticalExtensionChecks" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableCriticalExtensionChecks"></a>

```typescript
public readonly disableCriticalExtensionChecks: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableNameChecks`<sup>Required</sup> <a name="disableNameChecks" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameChecks"></a>

```typescript
public readonly disableNameChecks: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableNameConstraintChecks`<sup>Required</sup> <a name="disableNameConstraintChecks" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameConstraintChecks"></a>

```typescript
public readonly disableNameConstraintChecks: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disablePathLengthChecks`<sup>Required</sup> <a name="disablePathLengthChecks" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disablePathLengthChecks"></a>

```typescript
public readonly disablePathLengthChecks: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuerRef`<sup>Required</sup> <a name="issuerRef" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerRef"></a>

```typescript
public readonly issuerRef: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultPkiSecretBackendIssuerConfig <a name="DataVaultPkiSecretBackendIssuerConfig" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.Initializer"></a>

```typescript
import { dataVaultPkiSecretBackendIssuer } from '@cdktn/provider-vault'

const dataVaultPkiSecretBackendIssuerConfig: dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.backend">backend</a></code> | <code>string</code> | Full path where PKI backend is mounted. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.issuerRef">issuerRef</a></code> | <code>string</code> | Reference to an existing issuer. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disableCriticalExtensionChecks">disableCriticalExtensionChecks</a></code> | <code>boolean \| cdktn.IResolvable</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the issued certificate) contain critical extensions not processed by Vault. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disableNameChecks">disableNameChecks</a></code> | <code>boolean \| cdktn.IResolvable</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) contains a link in which the subject of the issuing certificate does not match the named issuer of the certificate it signed. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disableNameConstraintChecks">disableNameConstraintChecks</a></code> | <code>boolean \| cdktn.IResolvable</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) violates the name constraints critical extension of one of the issuer certificates in the chain. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disablePathLengthChecks">disablePathLengthChecks</a></code> | <code>boolean \| cdktn.IResolvable</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) is longer than allowed by a certificate authority in that chain. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/pki_secret_backend_issuer#id DataVaultPkiSecretBackendIssuer#id}. |
| <code><a href="#@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Full path where PKI backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/pki_secret_backend_issuer#backend DataVaultPkiSecretBackendIssuer#backend}

---

##### `issuerRef`<sup>Required</sup> <a name="issuerRef" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.issuerRef"></a>

```typescript
public readonly issuerRef: string;
```

- *Type:* string

Reference to an existing issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/pki_secret_backend_issuer#issuer_ref DataVaultPkiSecretBackendIssuer#issuer_ref}

---

##### `disableCriticalExtensionChecks`<sup>Optional</sup> <a name="disableCriticalExtensionChecks" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disableCriticalExtensionChecks"></a>

```typescript
public readonly disableCriticalExtensionChecks: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

This determines whether this issuer is able to issue certificates where the chain of trust (including the issued certificate) contain critical extensions not processed by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/pki_secret_backend_issuer#disable_critical_extension_checks DataVaultPkiSecretBackendIssuer#disable_critical_extension_checks}

---

##### `disableNameChecks`<sup>Optional</sup> <a name="disableNameChecks" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disableNameChecks"></a>

```typescript
public readonly disableNameChecks: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) contains a link in which the subject of the issuing certificate does not match the named issuer of the certificate it signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/pki_secret_backend_issuer#disable_name_checks DataVaultPkiSecretBackendIssuer#disable_name_checks}

---

##### `disableNameConstraintChecks`<sup>Optional</sup> <a name="disableNameConstraintChecks" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disableNameConstraintChecks"></a>

```typescript
public readonly disableNameConstraintChecks: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) violates the name constraints critical extension of one of the issuer certificates in the chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/pki_secret_backend_issuer#disable_name_constraint_checks DataVaultPkiSecretBackendIssuer#disable_name_constraint_checks}

---

##### `disablePathLengthChecks`<sup>Optional</sup> <a name="disablePathLengthChecks" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disablePathLengthChecks"></a>

```typescript
public readonly disablePathLengthChecks: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) is longer than allowed by a certificate authority in that chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/pki_secret_backend_issuer#disable_path_length_checks DataVaultPkiSecretBackendIssuer#disable_path_length_checks}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/pki_secret_backend_issuer#id DataVaultPkiSecretBackendIssuer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/pki_secret_backend_issuer#namespace DataVaultPkiSecretBackendIssuer#namespace}

---



