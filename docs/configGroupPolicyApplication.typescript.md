# `configGroupPolicyApplication` Submodule <a name="`configGroupPolicyApplication` Submodule" id="@cdktn/provider-vault.configGroupPolicyApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigGroupPolicyApplication <a name="ConfigGroupPolicyApplication" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_group_policy_application vault_config_group_policy_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer"></a>

```typescript
import { configGroupPolicyApplication } from '@cdktn/provider-vault'

new configGroupPolicyApplication.ConfigGroupPolicyApplication(scope: Construct, id: string, config: ConfigGroupPolicyApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig">ConfigGroupPolicyApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig">ConfigGroupPolicyApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigGroupPolicyApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.isConstruct"></a>

```typescript
import { configGroupPolicyApplication } from '@cdktn/provider-vault'

configGroupPolicyApplication.ConfigGroupPolicyApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.isTerraformElement"></a>

```typescript
import { configGroupPolicyApplication } from '@cdktn/provider-vault'

configGroupPolicyApplication.ConfigGroupPolicyApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.isTerraformResource"></a>

```typescript
import { configGroupPolicyApplication } from '@cdktn/provider-vault'

configGroupPolicyApplication.ConfigGroupPolicyApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.generateConfigForImport"></a>

```typescript
import { configGroupPolicyApplication } from '@cdktn/provider-vault'

configGroupPolicyApplication.ConfigGroupPolicyApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConfigGroupPolicyApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConfigGroupPolicyApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConfigGroupPolicyApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_group_policy_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConfigGroupPolicyApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.groupPolicyApplicationModeInput">groupPolicyApplicationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.groupPolicyApplicationMode">groupPolicyApplicationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `groupPolicyApplicationModeInput`<sup>Optional</sup> <a name="groupPolicyApplicationModeInput" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.groupPolicyApplicationModeInput"></a>

```typescript
public readonly groupPolicyApplicationModeInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `groupPolicyApplicationMode`<sup>Required</sup> <a name="groupPolicyApplicationMode" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.groupPolicyApplicationMode"></a>

```typescript
public readonly groupPolicyApplicationMode: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigGroupPolicyApplicationConfig <a name="ConfigGroupPolicyApplicationConfig" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.Initializer"></a>

```typescript
import { configGroupPolicyApplication } from '@cdktn/provider-vault'

const configGroupPolicyApplicationConfig: configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.groupPolicyApplicationMode">groupPolicyApplicationMode</a></code> | <code>string</code> | Mode for group policy application. |
| <code><a href="#@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `groupPolicyApplicationMode`<sup>Required</sup> <a name="groupPolicyApplicationMode" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.groupPolicyApplicationMode"></a>

```typescript
public readonly groupPolicyApplicationMode: string;
```

- *Type:* string

Mode for group policy application.

Must be either "within_namespace_hierarchy" or "any". "within_namespace_hierarchy" means policies only apply when the token authorizing a request was created in the same namespace as the group, or a descendant namespace. "any" means group policies apply to all members of a group, regardless of what namespace the request token came from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_group_policy_application#group_policy_application_mode ConfigGroupPolicyApplication#group_policy_application_mode}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.configGroupPolicyApplication.ConfigGroupPolicyApplicationConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_group_policy_application#namespace ConfigGroupPolicyApplication#namespace}

---



