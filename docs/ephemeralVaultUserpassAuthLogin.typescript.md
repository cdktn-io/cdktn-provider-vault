# `ephemeralVaultUserpassAuthLogin` Submodule <a name="`ephemeralVaultUserpassAuthLogin` Submodule" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultUserpassAuthLogin <a name="EphemeralVaultUserpassAuthLogin" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/userpass_auth_login vault_userpass_auth_login}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.Initializer"></a>

```typescript
import { ephemeralVaultUserpassAuthLogin } from '@cdktn/provider-vault'

new ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin(scope: Construct, id: string, config: EphemeralVaultUserpassAuthLoginConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig">EphemeralVaultUserpassAuthLoginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig">EphemeralVaultUserpassAuthLoginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.resetMountId"></a>

```typescript
public resetMountId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.isConstruct"></a>

```typescript
import { ephemeralVaultUserpassAuthLogin } from '@cdktn/provider-vault'

ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.isTerraformElement"></a>

```typescript
import { ephemeralVaultUserpassAuthLogin } from '@cdktn/provider-vault'

ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralVaultUserpassAuthLogin } from '@cdktn/provider-vault'

ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.accessor">accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.clientToken">clientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.leaseDuration">leaseDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.renewable">renewable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.mountIdInput">mountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.mountId">mountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.accessor"></a>

```typescript
public readonly accessor: string;
```

- *Type:* string

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.leaseDuration"></a>

```typescript
public readonly leaseDuration: number;
```

- *Type:* number

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

##### `renewable`<sup>Required</sup> <a name="renewable" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.renewable"></a>

```typescript
public readonly renewable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.mountIdInput"></a>

```typescript
public readonly mountIdInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultUserpassAuthLoginConfig <a name="EphemeralVaultUserpassAuthLoginConfig" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.Initializer"></a>

```typescript
import { ephemeralVaultUserpassAuthLogin } from '@cdktn/provider-vault'

const ephemeralVaultUserpassAuthLoginConfig: ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.mount">mount</a></code> | <code>string</code> | Mount path for the Userpass auth engine in Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.password">password</a></code> | <code>string</code> | Password to log in with. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.username">username</a></code> | <code>string</code> | Username to log in with. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.mountId">mountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Mount path for the Userpass auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/userpass_auth_login#mount EphemeralVaultUserpassAuthLogin#mount}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password to log in with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/userpass_auth_login#password EphemeralVaultUserpassAuthLogin#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username to log in with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/userpass_auth_login#username EphemeralVaultUserpassAuthLogin#username}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/userpass_auth_login#mount_id EphemeralVaultUserpassAuthLogin#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/userpass_auth_login#namespace EphemeralVaultUserpassAuthLogin#namespace}

---



