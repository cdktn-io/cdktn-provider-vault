# `dataVaultPluginRuntimes` Submodule <a name="`dataVaultPluginRuntimes` Submodule" id="@cdktn/provider-vault.dataVaultPluginRuntimes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultPluginRuntimes <a name="DataVaultPluginRuntimes" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/plugin_runtimes vault_plugin_runtimes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer"></a>

```typescript
import { dataVaultPluginRuntimes } from '@cdktn/provider-vault'

new dataVaultPluginRuntimes.DataVaultPluginRuntimes(scope: Construct, id: string, config?: DataVaultPluginRuntimesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig">DataVaultPluginRuntimesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig">DataVaultPluginRuntimesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataVaultPluginRuntimes resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isConstruct"></a>

```typescript
import { dataVaultPluginRuntimes } from '@cdktn/provider-vault'

dataVaultPluginRuntimes.DataVaultPluginRuntimes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformElement"></a>

```typescript
import { dataVaultPluginRuntimes } from '@cdktn/provider-vault'

dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformDataSource"></a>

```typescript
import { dataVaultPluginRuntimes } from '@cdktn/provider-vault'

dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport"></a>

```typescript
import { dataVaultPluginRuntimes } from '@cdktn/provider-vault'

dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataVaultPluginRuntimes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataVaultPluginRuntimes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataVaultPluginRuntimes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/plugin_runtimes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataVaultPluginRuntimes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.runtimes">runtimes</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList">DataVaultPluginRuntimesRuntimesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `runtimes`<sup>Required</sup> <a name="runtimes" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.runtimes"></a>

```typescript
public readonly runtimes: DataVaultPluginRuntimesRuntimesList;
```

- *Type:* <a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList">DataVaultPluginRuntimesRuntimesList</a>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultPluginRuntimesConfig <a name="DataVaultPluginRuntimesConfig" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.Initializer"></a>

```typescript
import { dataVaultPluginRuntimes } from '@cdktn/provider-vault'

const dataVaultPluginRuntimesConfig: dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.type">type</a></code> | <code>string</code> | Specifies the plugin runtime type to list. Currently only `container` is supported. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/plugin_runtimes#namespace DataVaultPluginRuntimes#namespace}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Specifies the plugin runtime type to list. Currently only `container` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/data-sources/plugin_runtimes#type DataVaultPluginRuntimes#type}

---

### DataVaultPluginRuntimesRuntimes <a name="DataVaultPluginRuntimesRuntimes" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimes.Initializer"></a>

```typescript
import { dataVaultPluginRuntimes } from '@cdktn/provider-vault'

const dataVaultPluginRuntimesRuntimes: dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimes = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataVaultPluginRuntimesRuntimesList <a name="DataVaultPluginRuntimesRuntimesList" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer"></a>

```typescript
import { dataVaultPluginRuntimes } from '@cdktn/provider-vault'

new dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.get"></a>

```typescript
public get(index: number): DataVaultPluginRuntimesRuntimesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataVaultPluginRuntimesRuntimesOutputReference <a name="DataVaultPluginRuntimesRuntimesOutputReference" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer"></a>

```typescript
import { dataVaultPluginRuntimes } from '@cdktn/provider-vault'

new dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.cgroupParent">cgroupParent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.cpuNanos">cpuNanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.memoryBytes">memoryBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.ociRuntime">ociRuntime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.rootless">rootless</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimes">DataVaultPluginRuntimesRuntimes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cgroupParent`<sup>Required</sup> <a name="cgroupParent" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.cgroupParent"></a>

```typescript
public readonly cgroupParent: string;
```

- *Type:* string

---

##### `cpuNanos`<sup>Required</sup> <a name="cpuNanos" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.cpuNanos"></a>

```typescript
public readonly cpuNanos: number;
```

- *Type:* number

---

##### `memoryBytes`<sup>Required</sup> <a name="memoryBytes" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.memoryBytes"></a>

```typescript
public readonly memoryBytes: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ociRuntime`<sup>Required</sup> <a name="ociRuntime" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.ociRuntime"></a>

```typescript
public readonly ociRuntime: string;
```

- *Type:* string

---

##### `rootless`<sup>Required</sup> <a name="rootless" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.rootless"></a>

```typescript
public readonly rootless: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataVaultPluginRuntimesRuntimes;
```

- *Type:* <a href="#@cdktn/provider-vault.dataVaultPluginRuntimes.DataVaultPluginRuntimesRuntimes">DataVaultPluginRuntimesRuntimes</a>

---



