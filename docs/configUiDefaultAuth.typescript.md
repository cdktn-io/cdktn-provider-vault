# `configUiDefaultAuth` Submodule <a name="`configUiDefaultAuth` Submodule" id="@cdktn/provider-vault.configUiDefaultAuth"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigUiDefaultAuth <a name="ConfigUiDefaultAuth" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth vault_config_ui_default_auth}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer"></a>

```typescript
import { configUiDefaultAuth } from '@cdktn/provider-vault'

new configUiDefaultAuth.ConfigUiDefaultAuth(scope: Construct, id: string, config: ConfigUiDefaultAuthConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig">ConfigUiDefaultAuthConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig">ConfigUiDefaultAuthConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetBackupAuthTypes">resetBackupAuthTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetDisableInheritance">resetDisableInheritance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetNamespacePath">resetNamespacePath</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBackupAuthTypes` <a name="resetBackupAuthTypes" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetBackupAuthTypes"></a>

```typescript
public resetBackupAuthTypes(): void
```

##### `resetDisableInheritance` <a name="resetDisableInheritance" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetDisableInheritance"></a>

```typescript
public resetDisableInheritance(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetNamespacePath` <a name="resetNamespacePath" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.resetNamespacePath"></a>

```typescript
public resetNamespacePath(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigUiDefaultAuth resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isConstruct"></a>

```typescript
import { configUiDefaultAuth } from '@cdktn/provider-vault'

configUiDefaultAuth.ConfigUiDefaultAuth.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformElement"></a>

```typescript
import { configUiDefaultAuth } from '@cdktn/provider-vault'

configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformResource"></a>

```typescript
import { configUiDefaultAuth } from '@cdktn/provider-vault'

configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport"></a>

```typescript
import { configUiDefaultAuth } from '@cdktn/provider-vault'

configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConfigUiDefaultAuth resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigUiDefaultAuth to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigUiDefaultAuth that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConfigUiDefaultAuth to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.backupAuthTypesInput">backupAuthTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.defaultAuthTypeInput">defaultAuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.disableInheritanceInput">disableInheritanceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespacePathInput">namespacePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.backupAuthTypes">backupAuthTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.defaultAuthType">defaultAuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.disableInheritance">disableInheritance</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespacePath">namespacePath</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `backupAuthTypesInput`<sup>Optional</sup> <a name="backupAuthTypesInput" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.backupAuthTypesInput"></a>

```typescript
public readonly backupAuthTypesInput: string[];
```

- *Type:* string[]

---

##### `defaultAuthTypeInput`<sup>Optional</sup> <a name="defaultAuthTypeInput" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.defaultAuthTypeInput"></a>

```typescript
public readonly defaultAuthTypeInput: string;
```

- *Type:* string

---

##### `disableInheritanceInput`<sup>Optional</sup> <a name="disableInheritanceInput" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.disableInheritanceInput"></a>

```typescript
public readonly disableInheritanceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `namespacePathInput`<sup>Optional</sup> <a name="namespacePathInput" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespacePathInput"></a>

```typescript
public readonly namespacePathInput: string;
```

- *Type:* string

---

##### `backupAuthTypes`<sup>Required</sup> <a name="backupAuthTypes" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.backupAuthTypes"></a>

```typescript
public readonly backupAuthTypes: string[];
```

- *Type:* string[]

---

##### `defaultAuthType`<sup>Required</sup> <a name="defaultAuthType" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.defaultAuthType"></a>

```typescript
public readonly defaultAuthType: string;
```

- *Type:* string

---

##### `disableInheritance`<sup>Required</sup> <a name="disableInheritance" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.disableInheritance"></a>

```typescript
public readonly disableInheritance: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `namespacePath`<sup>Required</sup> <a name="namespacePath" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.namespacePath"></a>

```typescript
public readonly namespacePath: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuth.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigUiDefaultAuthConfig <a name="ConfigUiDefaultAuthConfig" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.Initializer"></a>

```typescript
import { configUiDefaultAuth } from '@cdktn/provider-vault'

const configUiDefaultAuthConfig: configUiDefaultAuth.ConfigUiDefaultAuthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.defaultAuthType">defaultAuthType</a></code> | <code>string</code> | The default authentication method. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.name">name</a></code> | <code>string</code> | Unique identifier for the configuration. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.backupAuthTypes">backupAuthTypes</a></code> | <code>string[]</code> | List of backup authentication methods. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.disableInheritance">disableInheritance</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, child namespaces will not inherit default_auth_type and backup_auth_types from this configuration. |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.namespacePath">namespacePath</a></code> | <code>string</code> | Target namespace for the configuration. Empty string or omitted applies to root namespace. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `defaultAuthType`<sup>Required</sup> <a name="defaultAuthType" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.defaultAuthType"></a>

```typescript
public readonly defaultAuthType: string;
```

- *Type:* string

The default authentication method.

Uses `OneOf` validator to ensure only valid auth methods are accepted: github, jwt, ldap, oidc, okta, radius, saml, token, userpass.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth#default_auth_type ConfigUiDefaultAuth#default_auth_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique identifier for the configuration.

Can contain letters, numbers, underscores, and dashes. Uses `RequiresReplace()` plan modifier - changing this forces resource recreation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth#name ConfigUiDefaultAuth#name}

---

##### `backupAuthTypes`<sup>Optional</sup> <a name="backupAuthTypes" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.backupAuthTypes"></a>

```typescript
public readonly backupAuthTypes: string[];
```

- *Type:* string[]

List of backup authentication methods.

Uses `ListAttribute` with `ElementType: StringType` to preserve order of backup methods. Each must be a valid auth type. Vault presents these in the "Sign in with other methods" tab. **Note:** Removing this field from configuration will clear it in Vault by sending an empty array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth#backup_auth_types ConfigUiDefaultAuth#backup_auth_types}

---

##### `disableInheritance`<sup>Optional</sup> <a name="disableInheritance" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.disableInheritance"></a>

```typescript
public readonly disableInheritance: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, child namespaces will not inherit default_auth_type and backup_auth_types from this configuration.

**Note:** Removing this field from configuration will reset it to `false` in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth#disable_inheritance ConfigUiDefaultAuth#disable_inheritance}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth#namespace ConfigUiDefaultAuth#namespace}

---

##### `namespacePath`<sup>Optional</sup> <a name="namespacePath" id="@cdktn/provider-vault.configUiDefaultAuth.ConfigUiDefaultAuthConfig.property.namespacePath"></a>

```typescript
public readonly namespacePath: string;
```

- *Type:* string

Target namespace for the configuration. Empty string or omitted applies to root namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_ui_default_auth#namespace_path ConfigUiDefaultAuth#namespace_path}

---



