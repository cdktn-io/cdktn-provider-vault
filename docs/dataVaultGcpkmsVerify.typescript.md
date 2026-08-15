# `dataVaultGcpkmsVerify` Submodule <a name="`dataVaultGcpkmsVerify` Submodule" id="@cdktn/provider-vault.dataVaultGcpkmsVerify"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultGcpkmsVerify <a name="DataVaultGcpkmsVerify" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify vault_gcpkms_verify}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer"></a>

```typescript
import { dataVaultGcpkmsVerify } from '@cdktn/provider-vault'

new dataVaultGcpkmsVerify.DataVaultGcpkmsVerify(scope: Construct, id: string, config: DataVaultGcpkmsVerifyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig">DataVaultGcpkmsVerifyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig">DataVaultGcpkmsVerifyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultGcpkmsVerify resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isConstruct"></a>

```typescript
import { dataVaultGcpkmsVerify } from '@cdktn/provider-vault'

dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isTerraformElement"></a>

```typescript
import { dataVaultGcpkmsVerify } from '@cdktn/provider-vault'

dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isTerraformDataSource"></a>

```typescript
import { dataVaultGcpkmsVerify } from '@cdktn/provider-vault'

dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.generateConfigForImport"></a>

```typescript
import { dataVaultGcpkmsVerify } from '@cdktn/provider-vault'

dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataVaultGcpkmsVerify resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultGcpkmsVerify to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultGcpkmsVerify that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultGcpkmsVerify to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.valid">valid</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.digestInput">digestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyVersionInput">keyVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.signatureInput">signatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.digest">digest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyVersion">keyVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.signature">signature</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `valid`<sup>Required</sup> <a name="valid" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.valid"></a>

```typescript
public readonly valid: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `digestInput`<sup>Optional</sup> <a name="digestInput" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.digestInput"></a>

```typescript
public readonly digestInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `keyVersionInput`<sup>Optional</sup> <a name="keyVersionInput" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyVersionInput"></a>

```typescript
public readonly keyVersionInput: number;
```

- *Type:* number

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `signatureInput`<sup>Optional</sup> <a name="signatureInput" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.signatureInput"></a>

```typescript
public readonly signatureInput: string;
```

- *Type:* string

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.digest"></a>

```typescript
public readonly digest: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `keyVersion`<sup>Required</sup> <a name="keyVersion" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.keyVersion"></a>

```typescript
public readonly keyVersion: number;
```

- *Type:* number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerify.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultGcpkmsVerifyConfig <a name="DataVaultGcpkmsVerifyConfig" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.Initializer"></a>

```typescript
import { dataVaultGcpkmsVerify } from '@cdktn/provider-vault'

const dataVaultGcpkmsVerifyConfig: dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.digest">digest</a></code> | <code>string</code> | Base64-encoded digest to verify. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.keyName">keyName</a></code> | <code>string</code> | Name of the Vault key to use for verification. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.keyVersion">keyVersion</a></code> | <code>number</code> | Version of the key to use for verification. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.mount">mount</a></code> | <code>string</code> | Path where the GCP KMS secrets engine is mounted. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.signature">signature</a></code> | <code>string</code> | Base64-encoded signature to verify. |
| <code><a href="#@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.digest"></a>

```typescript
public readonly digest: string;
```

- *Type:* string

Base64-encoded digest to verify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#digest DataVaultGcpkmsVerify#digest}

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Name of the Vault key to use for verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#key_name DataVaultGcpkmsVerify#key_name}

---

##### `keyVersion`<sup>Required</sup> <a name="keyVersion" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.keyVersion"></a>

```typescript
public readonly keyVersion: number;
```

- *Type:* number

Version of the key to use for verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#key_version DataVaultGcpkmsVerify#key_version}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Path where the GCP KMS secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#mount DataVaultGcpkmsVerify#mount}

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

Base64-encoded signature to verify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#signature DataVaultGcpkmsVerify#signature}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultGcpkmsVerify.DataVaultGcpkmsVerifyConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/data-sources/gcpkms_verify#namespace DataVaultGcpkmsVerify#namespace}

---



