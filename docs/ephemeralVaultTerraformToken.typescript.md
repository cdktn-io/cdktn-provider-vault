# `ephemeralVaultTerraformToken` Submodule <a name="`ephemeralVaultTerraformToken` Submodule" id="@cdktn/provider-vault.ephemeralVaultTerraformToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultTerraformToken <a name="EphemeralVaultTerraformToken" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/terraform_token vault_terraform_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.Initializer"></a>

```typescript
import { ephemeralVaultTerraformToken } from '@cdktn/provider-vault'

new ephemeralVaultTerraformToken.EphemeralVaultTerraformToken(scope: Construct, id: string, config: EphemeralVaultTerraformTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformTokenConfig">EphemeralVaultTerraformTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformTokenConfig">EphemeralVaultTerraformTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.resetMount">resetMount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMount` <a name="resetMount" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.resetMount"></a>

```typescript
public resetMount(): void
```

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.resetMountId"></a>

```typescript
public resetMountId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.isConstruct"></a>

```typescript
import { ephemeralVaultTerraformToken } from '@cdktn/provider-vault'

ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.isTerraformElement"></a>

```typescript
import { ephemeralVaultTerraformToken } from '@cdktn/provider-vault'

ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralVaultTerraformToken } from '@cdktn/provider-vault'

ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.mountIdInput">mountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.mountId">mountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.mountIdInput"></a>

```typescript
public readonly mountIdInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultTerraformTokenConfig <a name="EphemeralVaultTerraformTokenConfig" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformTokenConfig.Initializer"></a>

```typescript
import { ephemeralVaultTerraformToken } from '@cdktn/provider-vault'

const ephemeralVaultTerraformTokenConfig: ephemeralVaultTerraformToken.EphemeralVaultTerraformTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformTokenConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformTokenConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformTokenConfig.property.roleName">roleName</a></code> | <code>string</code> | Specifies the name of the role to create credentials against. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformTokenConfig.property.mount">mount</a></code> | <code>string</code> | Mount path for the Terraform engine in Vault. Default is `terraform`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformTokenConfig.property.mountId">mountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformTokenConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformTokenConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Specifies the name of the role to create credentials against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/terraform_token#role_name EphemeralVaultTerraformToken#role_name}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformTokenConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

Mount path for the Terraform engine in Vault. Default is `terraform`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/terraform_token#mount EphemeralVaultTerraformToken#mount}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformTokenConfig.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/terraform_token#mount_id EphemeralVaultTerraformToken#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultTerraformToken.EphemeralVaultTerraformTokenConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/terraform_token#namespace EphemeralVaultTerraformToken#namespace}

---



