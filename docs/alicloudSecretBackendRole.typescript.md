# `alicloudSecretBackendRole` Submodule <a name="`alicloudSecretBackendRole` Submodule" id="@cdktn/provider-vault.alicloudSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlicloudSecretBackendRole <a name="AlicloudSecretBackendRole" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role vault_alicloud_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer"></a>

```typescript
import { alicloudSecretBackendRole } from '@cdktn/provider-vault'

new alicloudSecretBackendRole.AlicloudSecretBackendRole(scope: Construct, id: string, config: AlicloudSecretBackendRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig">AlicloudSecretBackendRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig">AlicloudSecretBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putInlinePolicies">putInlinePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putRemotePolicies">putRemotePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetInlinePolicies">resetInlinePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetRemotePolicies">resetRemotePolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInlinePolicies` <a name="putInlinePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putInlinePolicies"></a>

```typescript
public putInlinePolicies(value: IResolvable | AlicloudSecretBackendRoleInlinePolicies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putInlinePolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>[]

---

##### `putRemotePolicies` <a name="putRemotePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putRemotePolicies"></a>

```typescript
public putRemotePolicies(value: IResolvable | AlicloudSecretBackendRoleRemotePolicies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.putRemotePolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>[]

---

##### `resetInlinePolicies` <a name="resetInlinePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetInlinePolicies"></a>

```typescript
public resetInlinePolicies(): void
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetMaxTtl"></a>

```typescript
public resetMaxTtl(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetRemotePolicies` <a name="resetRemotePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetRemotePolicies"></a>

```typescript
public resetRemotePolicies(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.resetTtl"></a>

```typescript
public resetTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AlicloudSecretBackendRole resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isConstruct"></a>

```typescript
import { alicloudSecretBackendRole } from '@cdktn/provider-vault'

alicloudSecretBackendRole.AlicloudSecretBackendRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformElement"></a>

```typescript
import { alicloudSecretBackendRole } from '@cdktn/provider-vault'

alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformResource"></a>

```typescript
import { alicloudSecretBackendRole } from '@cdktn/provider-vault'

alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport"></a>

```typescript
import { alicloudSecretBackendRole } from '@cdktn/provider-vault'

alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AlicloudSecretBackendRole resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AlicloudSecretBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AlicloudSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AlicloudSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.inlinePolicies">inlinePolicies</a></code> | <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList">AlicloudSecretBackendRoleInlinePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.remotePolicies">remotePolicies</a></code> | <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList">AlicloudSecretBackendRoleRemotePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.inlinePoliciesInput">inlinePoliciesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.maxTtlInput">maxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.remotePoliciesInput">remotePoliciesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.maxTtl">maxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `inlinePolicies`<sup>Required</sup> <a name="inlinePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.inlinePolicies"></a>

```typescript
public readonly inlinePolicies: AlicloudSecretBackendRoleInlinePoliciesList;
```

- *Type:* <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList">AlicloudSecretBackendRoleInlinePoliciesList</a>

---

##### `remotePolicies`<sup>Required</sup> <a name="remotePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.remotePolicies"></a>

```typescript
public readonly remotePolicies: AlicloudSecretBackendRoleRemotePoliciesList;
```

- *Type:* <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList">AlicloudSecretBackendRoleRemotePoliciesList</a>

---

##### `inlinePoliciesInput`<sup>Optional</sup> <a name="inlinePoliciesInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.inlinePoliciesInput"></a>

```typescript
public readonly inlinePoliciesInput: IResolvable | AlicloudSecretBackendRoleInlinePolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>[]

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.maxTtlInput"></a>

```typescript
public readonly maxTtlInput: number;
```

- *Type:* number

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `remotePoliciesInput`<sup>Optional</sup> <a name="remotePoliciesInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.remotePoliciesInput"></a>

```typescript
public readonly remotePoliciesInput: IResolvable | AlicloudSecretBackendRoleRemotePolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>[]

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AlicloudSecretBackendRoleConfig <a name="AlicloudSecretBackendRoleConfig" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.Initializer"></a>

```typescript
import { alicloudSecretBackendRole } from '@cdktn/provider-vault'

const alicloudSecretBackendRoleConfig: alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.mount">mount</a></code> | <code>string</code> | Path of the AliCloud Secret Backend the role belongs to. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.name">name</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.inlinePolicies">inlinePolicies</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>[]</code> | inline_policies block. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.maxTtl">maxTtl</a></code> | <code>number</code> | The maximum allowed lifetime of credentials issued using this role. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.remotePolicies">remotePolicies</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>[]</code> | remote_policies block. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.roleArn">roleArn</a></code> | <code>string</code> | ARN of the RAM role to assume. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.ttl">ttl</a></code> | <code>number</code> | Duration in seconds after which the issued credentials should expire. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Path of the AliCloud Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#mount AlicloudSecretBackendRole#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#name AlicloudSecretBackendRole#name}

---

##### `inlinePolicies`<sup>Optional</sup> <a name="inlinePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.inlinePolicies"></a>

```typescript
public readonly inlinePolicies: IResolvable | AlicloudSecretBackendRoleInlinePolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>[]

inline_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#inline_policies AlicloudSecretBackendRole#inline_policies}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

The maximum allowed lifetime of credentials issued using this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#max_ttl AlicloudSecretBackendRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#namespace AlicloudSecretBackendRole#namespace}

---

##### `remotePolicies`<sup>Optional</sup> <a name="remotePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.remotePolicies"></a>

```typescript
public readonly remotePolicies: IResolvable | AlicloudSecretBackendRoleRemotePolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>[]

remote_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#remote_policies AlicloudSecretBackendRole#remote_policies}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

ARN of the RAM role to assume.

If provided, inline_policies and remote_policies should be blank. The trusted principal of the role must be configured to allow assumption by the access key and secret configured in the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#role_arn AlicloudSecretBackendRole#role_arn}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleConfig.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

Duration in seconds after which the issued credentials should expire.

Defaults to 0, in which case the value will fallback to the system/mount defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#ttl AlicloudSecretBackendRole#ttl}

---

### AlicloudSecretBackendRoleInlinePolicies <a name="AlicloudSecretBackendRoleInlinePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies.Initializer"></a>

```typescript
import { alicloudSecretBackendRole } from '@cdktn/provider-vault'

const alicloudSecretBackendRoleInlinePolicies: alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies.property.policyDocument">policyDocument</a></code> | <code>string</code> | JSON-encoded inline policy document. |

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

JSON-encoded inline policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#policy_document AlicloudSecretBackendRole#policy_document}

---

### AlicloudSecretBackendRoleRemotePolicies <a name="AlicloudSecretBackendRoleRemotePolicies" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies.Initializer"></a>

```typescript
import { alicloudSecretBackendRole } from '@cdktn/provider-vault'

const alicloudSecretBackendRoleRemotePolicies: alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies.property.name">name</a></code> | <code>string</code> | Name of the remote policy. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies.property.type">type</a></code> | <code>string</code> | Type of the remote policy (System or Custom). |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the remote policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#name AlicloudSecretBackendRole#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of the remote policy (System or Custom).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/alicloud_secret_backend_role#type AlicloudSecretBackendRole#type}

---

## Classes <a name="Classes" id="Classes"></a>

### AlicloudSecretBackendRoleInlinePoliciesList <a name="AlicloudSecretBackendRoleInlinePoliciesList" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer"></a>

```typescript
import { alicloudSecretBackendRole } from '@cdktn/provider-vault'

new alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.get"></a>

```typescript
public get(index: number): AlicloudSecretBackendRoleInlinePoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlicloudSecretBackendRoleInlinePolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>[]

---


### AlicloudSecretBackendRoleInlinePoliciesOutputReference <a name="AlicloudSecretBackendRoleInlinePoliciesOutputReference" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer"></a>

```typescript
import { alicloudSecretBackendRole } from '@cdktn/provider-vault'

new alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.policyDocumentInput">policyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.policyDocument">policyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyDocumentInput`<sup>Optional</sup> <a name="policyDocumentInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.policyDocumentInput"></a>

```typescript
public readonly policyDocumentInput: string;
```

- *Type:* string

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlicloudSecretBackendRoleInlinePolicies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleInlinePolicies">AlicloudSecretBackendRoleInlinePolicies</a>

---


### AlicloudSecretBackendRoleRemotePoliciesList <a name="AlicloudSecretBackendRoleRemotePoliciesList" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer"></a>

```typescript
import { alicloudSecretBackendRole } from '@cdktn/provider-vault'

new alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.get"></a>

```typescript
public get(index: number): AlicloudSecretBackendRoleRemotePoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlicloudSecretBackendRoleRemotePolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>[]

---


### AlicloudSecretBackendRoleRemotePoliciesOutputReference <a name="AlicloudSecretBackendRoleRemotePoliciesOutputReference" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer"></a>

```typescript
import { alicloudSecretBackendRole } from '@cdktn/provider-vault'

new alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlicloudSecretBackendRoleRemotePolicies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-vault.alicloudSecretBackendRole.AlicloudSecretBackendRoleRemotePolicies">AlicloudSecretBackendRoleRemotePolicies</a>

---



