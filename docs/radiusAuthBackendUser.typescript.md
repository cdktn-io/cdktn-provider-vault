# `radiusAuthBackendUser` Submodule <a name="`radiusAuthBackendUser` Submodule" id="@cdktn/provider-vault.radiusAuthBackendUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RadiusAuthBackendUser <a name="RadiusAuthBackendUser" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend_user vault_radius_auth_backend_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer"></a>

```typescript
import { radiusAuthBackendUser } from '@cdktn/provider-vault'

new radiusAuthBackendUser.RadiusAuthBackendUser(scope: Construct, id: string, config: RadiusAuthBackendUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig">RadiusAuthBackendUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig">RadiusAuthBackendUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.resetPolicies">resetPolicies</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.resetPolicies"></a>

```typescript
public resetPolicies(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RadiusAuthBackendUser resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.isConstruct"></a>

```typescript
import { radiusAuthBackendUser } from '@cdktn/provider-vault'

radiusAuthBackendUser.RadiusAuthBackendUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.isTerraformElement"></a>

```typescript
import { radiusAuthBackendUser } from '@cdktn/provider-vault'

radiusAuthBackendUser.RadiusAuthBackendUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.isTerraformResource"></a>

```typescript
import { radiusAuthBackendUser } from '@cdktn/provider-vault'

radiusAuthBackendUser.RadiusAuthBackendUser.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.generateConfigForImport"></a>

```typescript
import { radiusAuthBackendUser } from '@cdktn/provider-vault'

radiusAuthBackendUser.RadiusAuthBackendUser.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RadiusAuthBackendUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RadiusAuthBackendUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RadiusAuthBackendUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RadiusAuthBackendUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.policiesInput">policiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.policiesInput"></a>

```typescript
public readonly policiesInput: string[];
```

- *Type:* string[]

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RadiusAuthBackendUserConfig <a name="RadiusAuthBackendUserConfig" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.Initializer"></a>

```typescript
import { radiusAuthBackendUser } from '@cdktn/provider-vault'

const radiusAuthBackendUserConfig: radiusAuthBackendUser.RadiusAuthBackendUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.mount">mount</a></code> | <code>string</code> | Path to the RADIUS auth mount where the user will be registered. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.username">username</a></code> | <code>string</code> | The username to register with the RADIUS auth backend. |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.policies">policies</a></code> | <code>string[]</code> | A set of Vault policies to associate with this user. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Path to the RADIUS auth mount where the user will be registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend_user#mount RadiusAuthBackendUser#mount}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username to register with the RADIUS auth backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend_user#username RadiusAuthBackendUser#username}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend_user#namespace RadiusAuthBackendUser#namespace}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktn/provider-vault.radiusAuthBackendUser.RadiusAuthBackendUserConfig.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

A set of Vault policies to associate with this user.

If not set, only the `default` policy will be applicable to the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/radius_auth_backend_user#policies RadiusAuthBackendUser#policies}

---



