# `userpassAuthBackendUser` Submodule <a name="`userpassAuthBackendUser` Submodule" id="@cdktn/provider-vault.userpassAuthBackendUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserpassAuthBackendUser <a name="UserpassAuthBackendUser" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user vault_userpass_auth_backend_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer"></a>

```typescript
import { userpassAuthBackendUser } from '@cdktn/provider-vault'

new userpassAuthBackendUser.UserpassAuthBackendUser(scope: Construct, id: string, config: UserpassAuthBackendUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig">UserpassAuthBackendUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig">UserpassAuthBackendUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetAliasMetadata">resetAliasMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordHashWo">resetPasswordHashWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordHashWoVersion">resetPasswordHashWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordWo">resetPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordWoVersion">resetPasswordWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenBoundCidrs">resetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenExplicitMaxTtl">resetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenNoDefaultPolicy">resetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenNumUses">resetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenPeriod">resetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenPolicies">resetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenType">resetTokenType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAliasMetadata` <a name="resetAliasMetadata" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetAliasMetadata"></a>

```typescript
public resetAliasMetadata(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPasswordHashWo` <a name="resetPasswordHashWo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordHashWo"></a>

```typescript
public resetPasswordHashWo(): void
```

##### `resetPasswordHashWoVersion` <a name="resetPasswordHashWoVersion" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordHashWoVersion"></a>

```typescript
public resetPasswordHashWoVersion(): void
```

##### `resetPasswordWo` <a name="resetPasswordWo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordWo"></a>

```typescript
public resetPasswordWo(): void
```

##### `resetPasswordWoVersion` <a name="resetPasswordWoVersion" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetPasswordWoVersion"></a>

```typescript
public resetPasswordWoVersion(): void
```

##### `resetTokenBoundCidrs` <a name="resetTokenBoundCidrs" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenBoundCidrs"></a>

```typescript
public resetTokenBoundCidrs(): void
```

##### `resetTokenExplicitMaxTtl` <a name="resetTokenExplicitMaxTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenExplicitMaxTtl"></a>

```typescript
public resetTokenExplicitMaxTtl(): void
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenMaxTtl"></a>

```typescript
public resetTokenMaxTtl(): void
```

##### `resetTokenNoDefaultPolicy` <a name="resetTokenNoDefaultPolicy" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenNoDefaultPolicy"></a>

```typescript
public resetTokenNoDefaultPolicy(): void
```

##### `resetTokenNumUses` <a name="resetTokenNumUses" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenNumUses"></a>

```typescript
public resetTokenNumUses(): void
```

##### `resetTokenPeriod` <a name="resetTokenPeriod" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenPeriod"></a>

```typescript
public resetTokenPeriod(): void
```

##### `resetTokenPolicies` <a name="resetTokenPolicies" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenPolicies"></a>

```typescript
public resetTokenPolicies(): void
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenTtl"></a>

```typescript
public resetTokenTtl(): void
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.resetTokenType"></a>

```typescript
public resetTokenType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a UserpassAuthBackendUser resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isConstruct"></a>

```typescript
import { userpassAuthBackendUser } from '@cdktn/provider-vault'

userpassAuthBackendUser.UserpassAuthBackendUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isTerraformElement"></a>

```typescript
import { userpassAuthBackendUser } from '@cdktn/provider-vault'

userpassAuthBackendUser.UserpassAuthBackendUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isTerraformResource"></a>

```typescript
import { userpassAuthBackendUser } from '@cdktn/provider-vault'

userpassAuthBackendUser.UserpassAuthBackendUser.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.generateConfigForImport"></a>

```typescript
import { userpassAuthBackendUser } from '@cdktn/provider-vault'

userpassAuthBackendUser.UserpassAuthBackendUser.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a UserpassAuthBackendUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the UserpassAuthBackendUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing UserpassAuthBackendUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the UserpassAuthBackendUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.aliasMetadataInput">aliasMetadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWoInput">passwordHashWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWoVersionInput">passwordHashWoVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWoInput">passwordWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWoVersionInput">passwordWoVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenBoundCidrsInput">tokenBoundCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenExplicitMaxTtlInput">tokenExplicitMaxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNoDefaultPolicyInput">tokenNoDefaultPolicyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNumUsesInput">tokenNumUsesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPeriodInput">tokenPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPoliciesInput">tokenPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenTtlInput">tokenTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenTypeInput">tokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.aliasMetadata">aliasMetadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWo">passwordHashWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWoVersion">passwordHashWoVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWo">passwordWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWoVersion">passwordWoVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNumUses">tokenNumUses</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPeriod">tokenPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPolicies">tokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenTtl">tokenTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenType">tokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aliasMetadataInput`<sup>Optional</sup> <a name="aliasMetadataInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.aliasMetadataInput"></a>

```typescript
public readonly aliasMetadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `passwordHashWoInput`<sup>Optional</sup> <a name="passwordHashWoInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWoInput"></a>

```typescript
public readonly passwordHashWoInput: string;
```

- *Type:* string

---

##### `passwordHashWoVersionInput`<sup>Optional</sup> <a name="passwordHashWoVersionInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWoVersionInput"></a>

```typescript
public readonly passwordHashWoVersionInput: number;
```

- *Type:* number

---

##### `passwordWoInput`<sup>Optional</sup> <a name="passwordWoInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWoInput"></a>

```typescript
public readonly passwordWoInput: string;
```

- *Type:* string

---

##### `passwordWoVersionInput`<sup>Optional</sup> <a name="passwordWoVersionInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWoVersionInput"></a>

```typescript
public readonly passwordWoVersionInput: number;
```

- *Type:* number

---

##### `tokenBoundCidrsInput`<sup>Optional</sup> <a name="tokenBoundCidrsInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenBoundCidrsInput"></a>

```typescript
public readonly tokenBoundCidrsInput: string[];
```

- *Type:* string[]

---

##### `tokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="tokenExplicitMaxTtlInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenExplicitMaxTtlInput"></a>

```typescript
public readonly tokenExplicitMaxTtlInput: number;
```

- *Type:* number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenMaxTtlInput"></a>

```typescript
public readonly tokenMaxTtlInput: number;
```

- *Type:* number

---

##### `tokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="tokenNoDefaultPolicyInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNoDefaultPolicyInput"></a>

```typescript
public readonly tokenNoDefaultPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tokenNumUsesInput`<sup>Optional</sup> <a name="tokenNumUsesInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNumUsesInput"></a>

```typescript
public readonly tokenNumUsesInput: number;
```

- *Type:* number

---

##### `tokenPeriodInput`<sup>Optional</sup> <a name="tokenPeriodInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPeriodInput"></a>

```typescript
public readonly tokenPeriodInput: number;
```

- *Type:* number

---

##### `tokenPoliciesInput`<sup>Optional</sup> <a name="tokenPoliciesInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPoliciesInput"></a>

```typescript
public readonly tokenPoliciesInput: string[];
```

- *Type:* string[]

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenTtlInput"></a>

```typescript
public readonly tokenTtlInput: number;
```

- *Type:* number

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenTypeInput"></a>

```typescript
public readonly tokenTypeInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `aliasMetadata`<sup>Required</sup> <a name="aliasMetadata" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.aliasMetadata"></a>

```typescript
public readonly aliasMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `passwordHashWo`<sup>Required</sup> <a name="passwordHashWo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWo"></a>

```typescript
public readonly passwordHashWo: string;
```

- *Type:* string

---

##### `passwordHashWoVersion`<sup>Required</sup> <a name="passwordHashWoVersion" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordHashWoVersion"></a>

```typescript
public readonly passwordHashWoVersion: number;
```

- *Type:* number

---

##### `passwordWo`<sup>Required</sup> <a name="passwordWo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWo"></a>

```typescript
public readonly passwordWo: string;
```

- *Type:* string

---

##### `passwordWoVersion`<sup>Required</sup> <a name="passwordWoVersion" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.passwordWoVersion"></a>

```typescript
public readonly passwordWoVersion: number;
```

- *Type:* number

---

##### `tokenBoundCidrs`<sup>Required</sup> <a name="tokenBoundCidrs" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenBoundCidrs"></a>

```typescript
public readonly tokenBoundCidrs: string[];
```

- *Type:* string[]

---

##### `tokenExplicitMaxTtl`<sup>Required</sup> <a name="tokenExplicitMaxTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenExplicitMaxTtl"></a>

```typescript
public readonly tokenExplicitMaxTtl: number;
```

- *Type:* number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenMaxTtl"></a>

```typescript
public readonly tokenMaxTtl: number;
```

- *Type:* number

---

##### `tokenNoDefaultPolicy`<sup>Required</sup> <a name="tokenNoDefaultPolicy" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNoDefaultPolicy"></a>

```typescript
public readonly tokenNoDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tokenNumUses`<sup>Required</sup> <a name="tokenNumUses" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenNumUses"></a>

```typescript
public readonly tokenNumUses: number;
```

- *Type:* number

---

##### `tokenPeriod`<sup>Required</sup> <a name="tokenPeriod" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPeriod"></a>

```typescript
public readonly tokenPeriod: number;
```

- *Type:* number

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenPolicies"></a>

```typescript
public readonly tokenPolicies: string[];
```

- *Type:* string[]

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: number;
```

- *Type:* number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UserpassAuthBackendUserConfig <a name="UserpassAuthBackendUserConfig" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.Initializer"></a>

```typescript
import { userpassAuthBackendUser } from '@cdktn/provider-vault'

const userpassAuthBackendUserConfig: userpassAuthBackendUser.UserpassAuthBackendUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.mount">mount</a></code> | <code>string</code> | Mount path for the Userpass auth engine in Vault. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.username">username</a></code> | <code>string</code> | Username for this Userpass user. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.aliasMetadata">aliasMetadata</a></code> | <code>{[ key: string ]: string}</code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordHashWo">passwordHashWo</a></code> | <code>string</code> | Pre-hashed password for this user in bcrypt format. Available in Vault 1.17 and later. Mutually exclusive with password_wo. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordHashWoVersion">passwordHashWoVersion</a></code> | <code>number</code> | Version counter for the write-only `password_hash_wo` field. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordWo">passwordWo</a></code> | <code>string</code> | Password for this user. This is a write-only field and will not be read back from Vault. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordWoVersion">passwordWoVersion</a></code> | <code>number</code> | Version counter for the write-only `password_wo` field. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>string[]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>number</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>string[]</code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenTtl">tokenTtl</a></code> | <code>number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenType">tokenType</a></code> | <code>string</code> | The type of token to generate, service or batch. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Mount path for the Userpass auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#mount UserpassAuthBackendUser#mount}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for this Userpass user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#username UserpassAuthBackendUser#username}

---

##### `aliasMetadata`<sup>Optional</sup> <a name="aliasMetadata" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.aliasMetadata"></a>

```typescript
public readonly aliasMetadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#alias_metadata UserpassAuthBackendUser#alias_metadata}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#namespace UserpassAuthBackendUser#namespace}

---

##### `passwordHashWo`<sup>Optional</sup> <a name="passwordHashWo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordHashWo"></a>

```typescript
public readonly passwordHashWo: string;
```

- *Type:* string

Pre-hashed password for this user in bcrypt format. Available in Vault 1.17 and later. Mutually exclusive with password_wo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#password_hash_wo UserpassAuthBackendUser#password_hash_wo}

---

##### `passwordHashWoVersion`<sup>Optional</sup> <a name="passwordHashWoVersion" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordHashWoVersion"></a>

```typescript
public readonly passwordHashWoVersion: number;
```

- *Type:* number

Version counter for the write-only `password_hash_wo` field.

Since write-only values are not stored in state, Terraform cannot detect when the password hash changes. Increment this value whenever you update `password_hash_wo` to ensure the new password hash is sent to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#password_hash_wo_version UserpassAuthBackendUser#password_hash_wo_version}

---

##### `passwordWo`<sup>Optional</sup> <a name="passwordWo" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordWo"></a>

```typescript
public readonly passwordWo: string;
```

- *Type:* string

Password for this user. This is a write-only field and will not be read back from Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#password_wo UserpassAuthBackendUser#password_wo}

---

##### `passwordWoVersion`<sup>Optional</sup> <a name="passwordWoVersion" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.passwordWoVersion"></a>

```typescript
public readonly passwordWoVersion: number;
```

- *Type:* number

Version counter for the write-only `password_wo` field.

Since write-only values are not stored in state, Terraform cannot detect when the password changes. Increment this value whenever you update `password_wo` to ensure the new password is sent to Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#password_wo_version UserpassAuthBackendUser#password_wo_version}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenBoundCidrs"></a>

```typescript
public readonly tokenBoundCidrs: string[];
```

- *Type:* string[]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_bound_cidrs UserpassAuthBackendUser#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenExplicitMaxTtl"></a>

```typescript
public readonly tokenExplicitMaxTtl: number;
```

- *Type:* number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_explicit_max_ttl UserpassAuthBackendUser#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenMaxTtl"></a>

```typescript
public readonly tokenMaxTtl: number;
```

- *Type:* number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_max_ttl UserpassAuthBackendUser#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenNoDefaultPolicy"></a>

```typescript
public readonly tokenNoDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_no_default_policy UserpassAuthBackendUser#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenNumUses"></a>

```typescript
public readonly tokenNumUses: number;
```

- *Type:* number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_num_uses UserpassAuthBackendUser#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenPeriod"></a>

```typescript
public readonly tokenPeriod: number;
```

- *Type:* number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_period UserpassAuthBackendUser#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenPolicies"></a>

```typescript
public readonly tokenPolicies: string[];
```

- *Type:* string[]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_policies UserpassAuthBackendUser#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: number;
```

- *Type:* number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_ttl UserpassAuthBackendUser#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktn/provider-vault.userpassAuthBackendUser.UserpassAuthBackendUserConfig.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/userpass_auth_backend_user#token_type UserpassAuthBackendUser#token_type}

---



