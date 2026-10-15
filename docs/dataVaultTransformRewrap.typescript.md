# `dataVaultTransformRewrap` Submodule <a name="`dataVaultTransformRewrap` Submodule" id="@cdktn/provider-vault.dataVaultTransformRewrap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransformRewrap <a name="DataVaultTransformRewrap" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap vault_transform_rewrap}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer"></a>

```typescript
import { dataVaultTransformRewrap } from '@cdktn/provider-vault'

new dataVaultTransformRewrap.DataVaultTransformRewrap(scope: Construct, id: string, config: DataVaultTransformRewrapConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig">DataVaultTransformRewrapConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig">DataVaultTransformRewrapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetBatchInput">resetBatchInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetDecodeTransformation">resetDecodeTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetDecodeTweak">resetDecodeTweak</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetEncodedValue">resetEncodedValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetTransformation">resetTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetTweak">resetTweak</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetValue">resetValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBatchInput` <a name="resetBatchInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetBatchInput"></a>

```typescript
public resetBatchInput(): void
```

##### `resetDecodeTransformation` <a name="resetDecodeTransformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetDecodeTransformation"></a>

```typescript
public resetDecodeTransformation(): void
```

##### `resetDecodeTweak` <a name="resetDecodeTweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetDecodeTweak"></a>

```typescript
public resetDecodeTweak(): void
```

##### `resetEncodedValue` <a name="resetEncodedValue" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetEncodedValue"></a>

```typescript
public resetEncodedValue(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetTransformation` <a name="resetTransformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetTransformation"></a>

```typescript
public resetTransformation(): void
```

##### `resetTweak` <a name="resetTweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetTweak"></a>

```typescript
public resetTweak(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.resetValue"></a>

```typescript
public resetValue(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultTransformRewrap resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isConstruct"></a>

```typescript
import { dataVaultTransformRewrap } from '@cdktn/provider-vault'

dataVaultTransformRewrap.DataVaultTransformRewrap.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformElement"></a>

```typescript
import { dataVaultTransformRewrap } from '@cdktn/provider-vault'

dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformDataSource"></a>

```typescript
import { dataVaultTransformRewrap } from '@cdktn/provider-vault'

dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport"></a>

```typescript
import { dataVaultTransformRewrap } from '@cdktn/provider-vault'

dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataVaultTransformRewrap resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultTransformRewrap to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultTransformRewrap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultTransformRewrap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchResults">batchResults</a></code> | <code>cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchInputInput">batchInputInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTransformationInput">decodeTransformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTweakInput">decodeTweakInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.encodedValueInput">encodedValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.transformationInput">transformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tweakInput">tweakInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchInput">batchInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTransformation">decodeTransformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTweak">decodeTweak</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.encodedValue">encodedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.transformation">transformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tweak">tweak</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `batchResults`<sup>Required</sup> <a name="batchResults" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchResults"></a>

```typescript
public readonly batchResults: StringMapList;
```

- *Type:* cdktn.StringMapList

---

##### `batchInputInput`<sup>Optional</sup> <a name="batchInputInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchInputInput"></a>

```typescript
public readonly batchInputInput: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string}[]

---

##### `decodeTransformationInput`<sup>Optional</sup> <a name="decodeTransformationInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTransformationInput"></a>

```typescript
public readonly decodeTransformationInput: string;
```

- *Type:* string

---

##### `decodeTweakInput`<sup>Optional</sup> <a name="decodeTweakInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTweakInput"></a>

```typescript
public readonly decodeTweakInput: string;
```

- *Type:* string

---

##### `encodedValueInput`<sup>Optional</sup> <a name="encodedValueInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.encodedValueInput"></a>

```typescript
public readonly encodedValueInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `transformationInput`<sup>Optional</sup> <a name="transformationInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.transformationInput"></a>

```typescript
public readonly transformationInput: string;
```

- *Type:* string

---

##### `tweakInput`<sup>Optional</sup> <a name="tweakInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tweakInput"></a>

```typescript
public readonly tweakInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `batchInput`<sup>Required</sup> <a name="batchInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.batchInput"></a>

```typescript
public readonly batchInput: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string}[]

---

##### `decodeTransformation`<sup>Required</sup> <a name="decodeTransformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTransformation"></a>

```typescript
public readonly decodeTransformation: string;
```

- *Type:* string

---

##### `decodeTweak`<sup>Required</sup> <a name="decodeTweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.decodeTweak"></a>

```typescript
public readonly decodeTweak: string;
```

- *Type:* string

---

##### `encodedValue`<sup>Required</sup> <a name="encodedValue" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.encodedValue"></a>

```typescript
public readonly encodedValue: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.transformation"></a>

```typescript
public readonly transformation: string;
```

- *Type:* string

---

##### `tweak`<sup>Required</sup> <a name="tweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tweak"></a>

```typescript
public readonly tweak: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrap.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransformRewrapConfig <a name="DataVaultTransformRewrapConfig" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.Initializer"></a>

```typescript
import { dataVaultTransformRewrap } from '@cdktn/provider-vault'

const dataVaultTransformRewrapConfig: dataVaultTransformRewrap.DataVaultTransformRewrapConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.path">path</a></code> | <code>string</code> | Path to backend from which to retrieve data. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.roleName">roleName</a></code> | <code>string</code> | The name of the role. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.batchInput">batchInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string}[]</code> | Specifies a list of items to be re-encoded in a single batch. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.decodeTransformation">decodeTransformation</a></code> | <code>string</code> | The FPE transformation to use to decode the value. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.decodeTweak">decodeTweak</a></code> | <code>string</code> | The tweak value to use for decoding. Only applicable for FPE transformations with a supplied tweak source. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.encodedValue">encodedValue</a></code> | <code>string</code> | The result of rewrapping a value. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#id DataVaultTransformRewrap#id}. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.transformation">transformation</a></code> | <code>string</code> | The FPE transformation to use for re-encrypting the value. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.tweak">tweak</a></code> | <code>string</code> | The tweak value to use for re-encrypting. Only applicable for FPE transformations with a supplied tweak source. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.value">value</a></code> | <code>string</code> | The value to rewrap. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path to backend from which to retrieve data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#path DataVaultTransformRewrap#path}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#role_name DataVaultTransformRewrap#role_name}

---

##### `batchInput`<sup>Optional</sup> <a name="batchInput" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.batchInput"></a>

```typescript
public readonly batchInput: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string}[]

Specifies a list of items to be re-encoded in a single batch.

If this parameter is set, the top-level parameters 'value', 'transformation', 'decode_transformation', 'tweak', and 'decode_tweak' will be ignored. Each batch item within the list can specify these parameters instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#batch_input DataVaultTransformRewrap#batch_input}

---

##### `decodeTransformation`<sup>Optional</sup> <a name="decodeTransformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.decodeTransformation"></a>

```typescript
public readonly decodeTransformation: string;
```

- *Type:* string

The FPE transformation to use to decode the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#decode_transformation DataVaultTransformRewrap#decode_transformation}

---

##### `decodeTweak`<sup>Optional</sup> <a name="decodeTweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.decodeTweak"></a>

```typescript
public readonly decodeTweak: string;
```

- *Type:* string

The tweak value to use for decoding. Only applicable for FPE transformations with a supplied tweak source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#decode_tweak DataVaultTransformRewrap#decode_tweak}

---

##### `encodedValue`<sup>Optional</sup> <a name="encodedValue" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.encodedValue"></a>

```typescript
public readonly encodedValue: string;
```

- *Type:* string

The result of rewrapping a value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#encoded_value DataVaultTransformRewrap#encoded_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#id DataVaultTransformRewrap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#namespace DataVaultTransformRewrap#namespace}

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.transformation"></a>

```typescript
public readonly transformation: string;
```

- *Type:* string

The FPE transformation to use for re-encrypting the value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#transformation DataVaultTransformRewrap#transformation}

---

##### `tweak`<sup>Optional</sup> <a name="tweak" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.tweak"></a>

```typescript
public readonly tweak: string;
```

- *Type:* string

The tweak value to use for re-encrypting. Only applicable for FPE transformations with a supplied tweak source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#tweak DataVaultTransformRewrap#tweak}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-vault.dataVaultTransformRewrap.DataVaultTransformRewrapConfig.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value to rewrap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/data-sources/transform_rewrap#value DataVaultTransformRewrap#value}

---



