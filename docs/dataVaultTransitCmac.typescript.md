# `dataVaultTransitCmac` Submodule <a name="`dataVaultTransitCmac` Submodule" id="@cdktn/provider-vault.dataVaultTransitCmac"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransitCmac <a name="DataVaultTransitCmac" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/transit_cmac vault_transit_cmac}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer"></a>

```typescript
import { dataVaultTransitCmac } from '@cdktn/provider-vault'

new dataVaultTransitCmac.DataVaultTransitCmac(scope: Construct, id: string, config: DataVaultTransitCmacConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig">DataVaultTransitCmacConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig">DataVaultTransitCmacConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetBatchInput">resetBatchInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetBatchResults">resetBatchResults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetCmac">resetCmac</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetKeyVersion">resetKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetMacLength">resetMacLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetUrlMacLength">resetUrlMacLength</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBatchInput` <a name="resetBatchInput" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetBatchInput"></a>

```typescript
public resetBatchInput(): void
```

##### `resetBatchResults` <a name="resetBatchResults" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetBatchResults"></a>

```typescript
public resetBatchResults(): void
```

##### `resetCmac` <a name="resetCmac" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetCmac"></a>

```typescript
public resetCmac(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInput` <a name="resetInput" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetInput"></a>

```typescript
public resetInput(): void
```

##### `resetKeyVersion` <a name="resetKeyVersion" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetKeyVersion"></a>

```typescript
public resetKeyVersion(): void
```

##### `resetMacLength` <a name="resetMacLength" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetMacLength"></a>

```typescript
public resetMacLength(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetUrlMacLength` <a name="resetUrlMacLength" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetUrlMacLength"></a>

```typescript
public resetUrlMacLength(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultTransitCmac resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isConstruct"></a>

```typescript
import { dataVaultTransitCmac } from '@cdktn/provider-vault'

dataVaultTransitCmac.DataVaultTransitCmac.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isTerraformElement"></a>

```typescript
import { dataVaultTransitCmac } from '@cdktn/provider-vault'

dataVaultTransitCmac.DataVaultTransitCmac.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isTerraformDataSource"></a>

```typescript
import { dataVaultTransitCmac } from '@cdktn/provider-vault'

dataVaultTransitCmac.DataVaultTransitCmac.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.generateConfigForImport"></a>

```typescript
import { dataVaultTransitCmac } from '@cdktn/provider-vault'

dataVaultTransitCmac.DataVaultTransitCmac.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataVaultTransitCmac resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultTransitCmac to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultTransitCmac that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/transit_cmac#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultTransitCmac to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchInputInput">batchInputInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchResultsInput">batchResultsInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.cmacInput">cmacInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.inputInput">inputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.keyVersionInput">keyVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.macLengthInput">macLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.urlMacLengthInput">urlMacLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchInput">batchInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchResults">batchResults</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string}[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.cmac">cmac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.input">input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.keyVersion">keyVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.macLength">macLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.urlMacLength">urlMacLength</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `batchInputInput`<sup>Optional</sup> <a name="batchInputInput" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchInputInput"></a>

```typescript
public readonly batchInputInput: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string}[]

---

##### `batchResultsInput`<sup>Optional</sup> <a name="batchResultsInput" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchResultsInput"></a>

```typescript
public readonly batchResultsInput: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string}[]

---

##### `cmacInput`<sup>Optional</sup> <a name="cmacInput" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.cmacInput"></a>

```typescript
public readonly cmacInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.inputInput"></a>

```typescript
public readonly inputInput: string;
```

- *Type:* string

---

##### `keyVersionInput`<sup>Optional</sup> <a name="keyVersionInput" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.keyVersionInput"></a>

```typescript
public readonly keyVersionInput: number;
```

- *Type:* number

---

##### `macLengthInput`<sup>Optional</sup> <a name="macLengthInput" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.macLengthInput"></a>

```typescript
public readonly macLengthInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `urlMacLengthInput`<sup>Optional</sup> <a name="urlMacLengthInput" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.urlMacLengthInput"></a>

```typescript
public readonly urlMacLengthInput: number;
```

- *Type:* number

---

##### `batchInput`<sup>Required</sup> <a name="batchInput" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchInput"></a>

```typescript
public readonly batchInput: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string}[]

---

##### `batchResults`<sup>Required</sup> <a name="batchResults" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchResults"></a>

```typescript
public readonly batchResults: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string}[]

---

##### `cmac`<sup>Required</sup> <a name="cmac" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.cmac"></a>

```typescript
public readonly cmac: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

---

##### `keyVersion`<sup>Required</sup> <a name="keyVersion" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.keyVersion"></a>

```typescript
public readonly keyVersion: number;
```

- *Type:* number

---

##### `macLength`<sup>Required</sup> <a name="macLength" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.macLength"></a>

```typescript
public readonly macLength: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `urlMacLength`<sup>Required</sup> <a name="urlMacLength" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.urlMacLength"></a>

```typescript
public readonly urlMacLength: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransitCmacConfig <a name="DataVaultTransitCmacConfig" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.Initializer"></a>

```typescript
import { dataVaultTransitCmac } from '@cdktn/provider-vault'

const dataVaultTransitCmacConfig: dataVaultTransitCmac.DataVaultTransitCmacConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.name">name</a></code> | <code>string</code> | Name of the CMAC key to use. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.path">path</a></code> | <code>string</code> | The Transit secret backend the key belongs to. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.batchInput">batchInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string}[]</code> | Specifies a list of items for processing. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.batchResults">batchResults</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: string}[]</code> | The results returned from Vault if using batch_input. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.cmac">cmac</a></code> | <code>string</code> | The CMAC returned from Vault if using input. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/transit_cmac#id DataVaultTransitCmac#id}. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.input">input</a></code> | <code>string</code> | Specifies the base64 encoded input data. One of input or batch_input must be supplied. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.keyVersion">keyVersion</a></code> | <code>number</code> | The version of the key to use. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.macLength">macLength</a></code> | <code>number</code> | Specifies the MAC length to use (POST body parameter). The mac_length cannot be larger than the cipher's block size. |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.urlMacLength">urlMacLength</a></code> | <code>number</code> | Specifies the MAC length to use (URL parameter). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the CMAC key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/transit_cmac#name DataVaultTransitCmac#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The Transit secret backend the key belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/transit_cmac#path DataVaultTransitCmac#path}

---

##### `batchInput`<sup>Optional</sup> <a name="batchInput" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.batchInput"></a>

```typescript
public readonly batchInput: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string}[]

Specifies a list of items for processing.

When this parameter is set, any supplied 'input' or 'context' parameters will be ignored. Responses are returned in the 'batch_results' array component of the 'data' element of the response. Any batch output will preserve the order of the batch input. If the input data value of an item is invalid, the corresponding item in the 'batch_results' will have the key 'error' with a value describing the error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/transit_cmac#batch_input DataVaultTransitCmac#batch_input}

---

##### `batchResults`<sup>Optional</sup> <a name="batchResults" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.batchResults"></a>

```typescript
public readonly batchResults: IResolvable | {[ key: string ]: string}[];
```

- *Type:* cdktn.IResolvable | {[ key: string ]: string}[]

The results returned from Vault if using batch_input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/transit_cmac#batch_results DataVaultTransitCmac#batch_results}

---

##### `cmac`<sup>Optional</sup> <a name="cmac" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.cmac"></a>

```typescript
public readonly cmac: string;
```

- *Type:* string

The CMAC returned from Vault if using input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/transit_cmac#cmac DataVaultTransitCmac#cmac}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/transit_cmac#id DataVaultTransitCmac#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

Specifies the base64 encoded input data. One of input or batch_input must be supplied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/transit_cmac#input DataVaultTransitCmac#input}

---

##### `keyVersion`<sup>Optional</sup> <a name="keyVersion" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.keyVersion"></a>

```typescript
public readonly keyVersion: number;
```

- *Type:* number

The version of the key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/transit_cmac#key_version DataVaultTransitCmac#key_version}

---

##### `macLength`<sup>Optional</sup> <a name="macLength" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.macLength"></a>

```typescript
public readonly macLength: number;
```

- *Type:* number

Specifies the MAC length to use (POST body parameter). The mac_length cannot be larger than the cipher's block size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/transit_cmac#mac_length DataVaultTransitCmac#mac_length}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/transit_cmac#namespace DataVaultTransitCmac#namespace}

---

##### `urlMacLength`<sup>Optional</sup> <a name="urlMacLength" id="@cdktn/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.urlMacLength"></a>

```typescript
public readonly urlMacLength: number;
```

- *Type:* number

Specifies the MAC length to use (URL parameter).

If provided, this value overrides mac_length. The url_mac_length cannot be larger than the cipher's block size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/data-sources/transit_cmac#url_mac_length DataVaultTransitCmac#url_mac_length}

---



