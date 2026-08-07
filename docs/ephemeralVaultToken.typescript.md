# `ephemeralVaultToken` Submodule <a name="`ephemeralVaultToken` Submodule" id="@cdktn/provider-vault.ephemeralVaultToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultToken <a name="EphemeralVaultToken" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token vault_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer"></a>

```typescript
import { ephemeralVaultToken } from '@cdktn/provider-vault'

new ephemeralVaultToken.EphemeralVaultToken(scope: Construct, id: string, config?: EphemeralVaultTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig">EphemeralVaultTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig">EphemeralVaultTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetEntityAlias">resetEntityAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetExplicitMaxTtl">resetExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNoDefaultPolicy">resetNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNoParent">resetNoParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNumUses">resetNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetPolicies">resetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetRenewable">resetRenewable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetRoleName">resetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetWrappingTtl">resetWrappingTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEntityAlias` <a name="resetEntityAlias" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetEntityAlias"></a>

```typescript
public resetEntityAlias(): void
```

##### `resetExplicitMaxTtl` <a name="resetExplicitMaxTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetExplicitMaxTtl"></a>

```typescript
public resetExplicitMaxTtl(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetMountId"></a>

```typescript
public resetMountId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetNoDefaultPolicy` <a name="resetNoDefaultPolicy" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNoDefaultPolicy"></a>

```typescript
public resetNoDefaultPolicy(): void
```

##### `resetNoParent` <a name="resetNoParent" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNoParent"></a>

```typescript
public resetNoParent(): void
```

##### `resetNumUses` <a name="resetNumUses" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNumUses"></a>

```typescript
public resetNumUses(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetPolicies"></a>

```typescript
public resetPolicies(): void
```

##### `resetRenewable` <a name="resetRenewable" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetRenewable"></a>

```typescript
public resetRenewable(): void
```

##### `resetRoleName` <a name="resetRoleName" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetRoleName"></a>

```typescript
public resetRoleName(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetTtl"></a>

```typescript
public resetTtl(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetType"></a>

```typescript
public resetType(): void
```

##### `resetWrappingTtl` <a name="resetWrappingTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetWrappingTtl"></a>

```typescript
public resetWrappingTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isConstruct"></a>

```typescript
import { ephemeralVaultToken } from '@cdktn/provider-vault'

ephemeralVaultToken.EphemeralVaultToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformElement"></a>

```typescript
import { ephemeralVaultToken } from '@cdktn/provider-vault'

ephemeralVaultToken.EphemeralVaultToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralVaultToken } from '@cdktn/provider-vault'

ephemeralVaultToken.EphemeralVaultToken.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.accessor">accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.clientToken">clientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.leaseDuration">leaseDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.leaseId">leaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.orphan">orphan</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.tokenPolicies">tokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappedToken">wrappedToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingAccessor">wrappingAccessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityAliasInput">entityAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.explicitMaxTtlInput">explicitMaxTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.mountIdInput">mountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noDefaultPolicyInput">noDefaultPolicyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noParentInput">noParentInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.numUsesInput">numUsesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.periodInput">periodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.policiesInput">policiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.renewableInput">renewableInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingTtlInput">wrappingTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityAlias">entityAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.explicitMaxTtl">explicitMaxTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.mountId">mountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noDefaultPolicy">noDefaultPolicy</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noParent">noParent</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.numUses">numUses</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.period">period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.renewable">renewable</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingTtl">wrappingTtl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.accessor"></a>

```typescript
public readonly accessor: string;
```

- *Type:* string

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.leaseDuration"></a>

```typescript
public readonly leaseDuration: number;
```

- *Type:* number

---

##### `leaseId`<sup>Required</sup> <a name="leaseId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.leaseId"></a>

```typescript
public readonly leaseId: string;
```

- *Type:* string

---

##### `orphan`<sup>Required</sup> <a name="orphan" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.orphan"></a>

```typescript
public readonly orphan: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.tokenPolicies"></a>

```typescript
public readonly tokenPolicies: string[];
```

- *Type:* string[]

---

##### `wrappedToken`<sup>Required</sup> <a name="wrappedToken" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappedToken"></a>

```typescript
public readonly wrappedToken: string;
```

- *Type:* string

---

##### `wrappingAccessor`<sup>Required</sup> <a name="wrappingAccessor" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingAccessor"></a>

```typescript
public readonly wrappingAccessor: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `entityAliasInput`<sup>Optional</sup> <a name="entityAliasInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityAliasInput"></a>

```typescript
public readonly entityAliasInput: string;
```

- *Type:* string

---

##### `explicitMaxTtlInput`<sup>Optional</sup> <a name="explicitMaxTtlInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.explicitMaxTtlInput"></a>

```typescript
public readonly explicitMaxTtlInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.mountIdInput"></a>

```typescript
public readonly mountIdInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `noDefaultPolicyInput`<sup>Optional</sup> <a name="noDefaultPolicyInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noDefaultPolicyInput"></a>

```typescript
public readonly noDefaultPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `noParentInput`<sup>Optional</sup> <a name="noParentInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noParentInput"></a>

```typescript
public readonly noParentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `numUsesInput`<sup>Optional</sup> <a name="numUsesInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.numUsesInput"></a>

```typescript
public readonly numUsesInput: number;
```

- *Type:* number

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.periodInput"></a>

```typescript
public readonly periodInput: string;
```

- *Type:* string

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.policiesInput"></a>

```typescript
public readonly policiesInput: string[];
```

- *Type:* string[]

---

##### `renewableInput`<sup>Optional</sup> <a name="renewableInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.renewableInput"></a>

```typescript
public readonly renewableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `wrappingTtlInput`<sup>Optional</sup> <a name="wrappingTtlInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingTtlInput"></a>

```typescript
public readonly wrappingTtlInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `entityAlias`<sup>Required</sup> <a name="entityAlias" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityAlias"></a>

```typescript
public readonly entityAlias: string;
```

- *Type:* string

---

##### `explicitMaxTtl`<sup>Required</sup> <a name="explicitMaxTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.explicitMaxTtl"></a>

```typescript
public readonly explicitMaxTtl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `noDefaultPolicy`<sup>Required</sup> <a name="noDefaultPolicy" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noDefaultPolicy"></a>

```typescript
public readonly noDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `noParent`<sup>Required</sup> <a name="noParent" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noParent"></a>

```typescript
public readonly noParent: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `numUses`<sup>Required</sup> <a name="numUses" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.numUses"></a>

```typescript
public readonly numUses: number;
```

- *Type:* number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

##### `renewable`<sup>Required</sup> <a name="renewable" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.renewable"></a>

```typescript
public readonly renewable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `wrappingTtl`<sup>Required</sup> <a name="wrappingTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingTtl"></a>

```typescript
public readonly wrappingTtl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultTokenConfig <a name="EphemeralVaultTokenConfig" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.Initializer"></a>

```typescript
import { ephemeralVaultToken } from '@cdktn/provider-vault'

const ephemeralVaultTokenConfig: ephemeralVaultToken.EphemeralVaultTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.entityAlias">entityAlias</a></code> | <code>string</code> | Name of the entity alias to associate with during token creation. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.explicitMaxTtl">explicitMaxTtl</a></code> | <code>string</code> | The explicit max TTL of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.id">id</a></code> | <code>string</code> | The ID of the client token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Metadata to be associated with the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.mountId">mountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.noDefaultPolicy">noDefaultPolicy</a></code> | <code>boolean \| cdktn.IResolvable</code> | Flag to disable the default policy. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.noParent">noParent</a></code> | <code>boolean \| cdktn.IResolvable</code> | Flag to create a token without parent. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.numUses">numUses</a></code> | <code>number</code> | The number of allowed uses of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.period">period</a></code> | <code>string</code> | The period of the token for periodic tokens. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.policies">policies</a></code> | <code>string[]</code> | List of policies to attach to the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.renewable">renewable</a></code> | <code>boolean \| cdktn.IResolvable</code> | Flag to allow the token to be renewed. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.roleName">roleName</a></code> | <code>string</code> | The token role name. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.ttl">ttl</a></code> | <code>string</code> | The TTL period of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.type">type</a></code> | <code>string</code> | The token type. Can be 'batch' or 'service'. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.wrappingTtl">wrappingTtl</a></code> | <code>string</code> | The TTL period of the wrapped token. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#display_name EphemeralVaultToken#display_name}

---

##### `entityAlias`<sup>Optional</sup> <a name="entityAlias" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.entityAlias"></a>

```typescript
public readonly entityAlias: string;
```

- *Type:* string

Name of the entity alias to associate with during token creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#entity_alias EphemeralVaultToken#entity_alias}

---

##### `explicitMaxTtl`<sup>Optional</sup> <a name="explicitMaxTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.explicitMaxTtl"></a>

```typescript
public readonly explicitMaxTtl: string;
```

- *Type:* string

The explicit max TTL of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#explicit_max_ttl EphemeralVaultToken#explicit_max_ttl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the client token.

This is an input field, not a resource identifier. Can only be specified by a root token. The ID provided may not contain a '.' character and should not start with the 's.' prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#id EphemeralVaultToken#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata to be associated with the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#metadata EphemeralVaultToken#metadata}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#mount_id EphemeralVaultToken#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#namespace EphemeralVaultToken#namespace}

---

##### `noDefaultPolicy`<sup>Optional</sup> <a name="noDefaultPolicy" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.noDefaultPolicy"></a>

```typescript
public readonly noDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Flag to disable the default policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#no_default_policy EphemeralVaultToken#no_default_policy}

---

##### `noParent`<sup>Optional</sup> <a name="noParent" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.noParent"></a>

```typescript
public readonly noParent: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Flag to create a token without parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#no_parent EphemeralVaultToken#no_parent}

---

##### `numUses`<sup>Optional</sup> <a name="numUses" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.numUses"></a>

```typescript
public readonly numUses: number;
```

- *Type:* number

The number of allowed uses of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#num_uses EphemeralVaultToken#num_uses}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

The period of the token for periodic tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#period EphemeralVaultToken#period}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

List of policies to attach to the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#policies EphemeralVaultToken#policies}

---

##### `renewable`<sup>Optional</sup> <a name="renewable" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.renewable"></a>

```typescript
public readonly renewable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Flag to allow the token to be renewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#renewable EphemeralVaultToken#renewable}

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The token role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#role_name EphemeralVaultToken#role_name}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

The TTL period of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#ttl EphemeralVaultToken#ttl}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The token type. Can be 'batch' or 'service'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#type EphemeralVaultToken#type}

---

##### `wrappingTtl`<sup>Optional</sup> <a name="wrappingTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.wrappingTtl"></a>

```typescript
public readonly wrappingTtl: string;
```

- *Type:* string

The TTL period of the wrapped token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#wrapping_ttl EphemeralVaultToken#wrapping_ttl}

---



