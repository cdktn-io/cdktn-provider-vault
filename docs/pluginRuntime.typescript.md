# `pluginRuntime` Submodule <a name="`pluginRuntime` Submodule" id="@cdktn/provider-vault.pluginRuntime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PluginRuntime <a name="PluginRuntime" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime vault_plugin_runtime}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer"></a>

```typescript
import { pluginRuntime } from '@cdktn/provider-vault'

new pluginRuntime.PluginRuntime(scope: Construct, id: string, config: PluginRuntimeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig">PluginRuntimeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig">PluginRuntimeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetCgroupParent">resetCgroupParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetCpuNanos">resetCpuNanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetMemoryBytes">resetMemoryBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetOciRuntime">resetOciRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetRootless">resetRootless</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCgroupParent` <a name="resetCgroupParent" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetCgroupParent"></a>

```typescript
public resetCgroupParent(): void
```

##### `resetCpuNanos` <a name="resetCpuNanos" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetCpuNanos"></a>

```typescript
public resetCpuNanos(): void
```

##### `resetMemoryBytes` <a name="resetMemoryBytes" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetMemoryBytes"></a>

```typescript
public resetMemoryBytes(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetOciRuntime` <a name="resetOciRuntime" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetOciRuntime"></a>

```typescript
public resetOciRuntime(): void
```

##### `resetRootless` <a name="resetRootless" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.resetRootless"></a>

```typescript
public resetRootless(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PluginRuntime resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.isConstruct"></a>

```typescript
import { pluginRuntime } from '@cdktn/provider-vault'

pluginRuntime.PluginRuntime.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.isTerraformElement"></a>

```typescript
import { pluginRuntime } from '@cdktn/provider-vault'

pluginRuntime.PluginRuntime.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.isTerraformResource"></a>

```typescript
import { pluginRuntime } from '@cdktn/provider-vault'

pluginRuntime.PluginRuntime.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.generateConfigForImport"></a>

```typescript
import { pluginRuntime } from '@cdktn/provider-vault'

pluginRuntime.PluginRuntime.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PluginRuntime resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PluginRuntime to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PluginRuntime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PluginRuntime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cgroupParentInput">cgroupParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cpuNanosInput">cpuNanosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.memoryBytesInput">memoryBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.ociRuntimeInput">ociRuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.rootlessInput">rootlessInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cgroupParent">cgroupParent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cpuNanos">cpuNanos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.memoryBytes">memoryBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.ociRuntime">ociRuntime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.rootless">rootless</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `cgroupParentInput`<sup>Optional</sup> <a name="cgroupParentInput" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cgroupParentInput"></a>

```typescript
public readonly cgroupParentInput: string;
```

- *Type:* string

---

##### `cpuNanosInput`<sup>Optional</sup> <a name="cpuNanosInput" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cpuNanosInput"></a>

```typescript
public readonly cpuNanosInput: number;
```

- *Type:* number

---

##### `memoryBytesInput`<sup>Optional</sup> <a name="memoryBytesInput" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.memoryBytesInput"></a>

```typescript
public readonly memoryBytesInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `ociRuntimeInput`<sup>Optional</sup> <a name="ociRuntimeInput" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.ociRuntimeInput"></a>

```typescript
public readonly ociRuntimeInput: string;
```

- *Type:* string

---

##### `rootlessInput`<sup>Optional</sup> <a name="rootlessInput" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.rootlessInput"></a>

```typescript
public readonly rootlessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `cgroupParent`<sup>Required</sup> <a name="cgroupParent" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cgroupParent"></a>

```typescript
public readonly cgroupParent: string;
```

- *Type:* string

---

##### `cpuNanos`<sup>Required</sup> <a name="cpuNanos" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.cpuNanos"></a>

```typescript
public readonly cpuNanos: number;
```

- *Type:* number

---

##### `memoryBytes`<sup>Required</sup> <a name="memoryBytes" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.memoryBytes"></a>

```typescript
public readonly memoryBytes: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `ociRuntime`<sup>Required</sup> <a name="ociRuntime" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.ociRuntime"></a>

```typescript
public readonly ociRuntime: string;
```

- *Type:* string

---

##### `rootless`<sup>Required</sup> <a name="rootless" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.rootless"></a>

```typescript
public readonly rootless: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.pluginRuntime.PluginRuntime.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PluginRuntimeConfig <a name="PluginRuntimeConfig" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.Initializer"></a>

```typescript
import { pluginRuntime } from '@cdktn/provider-vault'

const pluginRuntimeConfig: pluginRuntime.PluginRuntimeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.name">name</a></code> | <code>string</code> | The name of the plugin runtime. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.type">type</a></code> | <code>string</code> | Specifies the plugin runtime type. Currently only `container` is supported. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.cgroupParent">cgroupParent</a></code> | <code>string</code> | Specifies the parent cgroup to set for each container. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.cpuNanos">cpuNanos</a></code> | <code>number</code> | Specifies CPU limit to set per container in billionths of a CPU. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.memoryBytes">memoryBytes</a></code> | <code>number</code> | Specifies memory limit to set per container in bytes. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.ociRuntime">ociRuntime</a></code> | <code>string</code> | Specifies OCI-compliant container runtime to use. |
| <code><a href="#@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.rootless">rootless</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the container runtime is running as a non-privileged user. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the plugin runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#name PluginRuntime#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Specifies the plugin runtime type. Currently only `container` is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#type PluginRuntime#type}

---

##### `cgroupParent`<sup>Optional</sup> <a name="cgroupParent" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.cgroupParent"></a>

```typescript
public readonly cgroupParent: string;
```

- *Type:* string

Specifies the parent cgroup to set for each container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#cgroup_parent PluginRuntime#cgroup_parent}

---

##### `cpuNanos`<sup>Optional</sup> <a name="cpuNanos" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.cpuNanos"></a>

```typescript
public readonly cpuNanos: number;
```

- *Type:* number

Specifies CPU limit to set per container in billionths of a CPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#cpu_nanos PluginRuntime#cpu_nanos}

---

##### `memoryBytes`<sup>Optional</sup> <a name="memoryBytes" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.memoryBytes"></a>

```typescript
public readonly memoryBytes: number;
```

- *Type:* number

Specifies memory limit to set per container in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#memory_bytes PluginRuntime#memory_bytes}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#namespace PluginRuntime#namespace}

---

##### `ociRuntime`<sup>Optional</sup> <a name="ociRuntime" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.ociRuntime"></a>

```typescript
public readonly ociRuntime: string;
```

- *Type:* string

Specifies OCI-compliant container runtime to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#oci_runtime PluginRuntime#oci_runtime}

---

##### `rootless`<sup>Optional</sup> <a name="rootless" id="@cdktn/provider-vault.pluginRuntime.PluginRuntimeConfig.property.rootless"></a>

```typescript
public readonly rootless: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the container runtime is running as a non-privileged user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/plugin_runtime#rootless PluginRuntime#rootless}

---



